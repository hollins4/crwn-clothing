import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { 
    selectIsCollectionsLoaded 
} from '../../redux/shop/shop.selector';

import WithSpinner from '../../components/with-spinner/with-spinner';

import CollectionPage from '../collection/collection';

const mapStateToProps = createStructuredSelector({
    isLoading: state => !selectIsCollectionsLoaded(state)

})

const CollectionsPageContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionPage);

export default CollectionsPageContainer;