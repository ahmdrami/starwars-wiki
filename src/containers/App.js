import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchDataIfNeeded, selectedPath } from '../actions';
import './App.css';
import Menu from '../components/Menu';
import ItemDetail from '../components/ItemDetail';

class App extends Component {
   static propTypes = {
      isFetching: PropTypes.bool.isRequired,
      lastUpdated: PropTypes.number,
      dispatch: PropTypes.func.isRequired,
      appState: PropTypes.any.isRequired
   };

   constructor(props) {
      super(props);
      this.state = {
         selectedItem: null
      }
   }

   componentDidMount() {
      const { dispatch } = this.props;
      // console.log(this.props);
      dispatch(fetchDataIfNeeded());
   }

   componentWillReceiveProps(nextProps) {
      console.log(nextProps, 'nextProps');
      if (nextProps.path !== this.props.path) {
         const { dispatch, path } = nextProps;
         dispatch(fetchDataIfNeeded(path));
      }
   }

   handleMenuClick = path => {
      const { dispatch } = this.props;

      if(typeof path === 'object' ) {
         this.setState({
            selectedItem: path
         })
         return;
      }

      if (path === 'back') {
         this.setState({
            selectedItem: null
         })
         dispatch(selectedPath('paths'));
         return;
      }
      dispatch(selectedPath(path));
      dispatch(fetchDataIfNeeded(path));
   };
   render() {
      const { appState, selectedPath, isFetching } = this.props;
      console.log(appState.paths);
      return (
         <div>
            { !appState.paths ? (
               <h2>Loading...</h2> // show spinner here
            ) : (
               <div className="body">
                  <Menu
                     isFetching={isFetching}
                     menu={appState[selectedPath].data}
                     onClick={this.handleMenuClick}
                  />
                  <ItemDetail item={this.state.selectedItem} path={selectedPath} />
               </div>
            )}
         </div>
      );
   }
}

const mapStateToProps = state => {
   const { selectedPath, appState } = state;
   const { isFetching, lastUpdated } = appState[selectedPath] || {
      isFetching: true,
      appState: null
   };

   return {
      isFetching,
      lastUpdated,
      appState,
      selectedPath
   };
};

export default connect(mapStateToProps)(App);
