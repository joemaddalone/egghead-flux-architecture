import AppConstants from '../constants/app-constants';
import { dispatch, register} from '../dispatchers/app-dispatcher';

export default {
  addItem: function(item){
    dispatch({
      actionType: AppConstants.ADD_ITEM,
      item: item
    })
  },
  removeItem: function(index){
    dispatch({
      actionType: AppConstants.REMOVE_ITEM,
      index: index
    })
  },
  increaseItem: function(index){
    dispatch({
      actionType: AppConstants.INCREASE_ITEM,
      index: index
    })
  },
  decreaseItem: function(index){
    dispatch({
      actionType: AppConstants.DECREASE_ITEM,
      index: index
    })
  }
}
