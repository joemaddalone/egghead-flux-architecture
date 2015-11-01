import AppConstants from '../constants/app-constants';
import { dispatch, register} from '../dispatchers/app-dispatcher';

export default {
    addItem( item ){
        dispatch( {
            actionType: AppConstants.ADD_ITEM,
            item: item
        } )
    },
    removeItem( index ){
        dispatch( {
            actionType: AppConstants.REMOVE_ITEM,
            index: index
        } )
    },
    increaseItem( index ){
        dispatch( {
            actionType: AppConstants.INCREASE_ITEM,
            index: index
        } )
    },
    decreaseItem( index ){
        dispatch( {
            actionType: AppConstants.DECREASE_ITEM,
            index: index
        } )
    }
}
