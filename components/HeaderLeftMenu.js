import { HeaderButtons, Item } from 'react-navigation-header-buttons'

import CustomHeaderButton from '../components/CustomHeaderButton'


const createHeaderLeftMenu = (navigation) => {
    return {
        headerTitle: 'My Favorites ;)',
            headerLeft: (
                <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                    <Item title='Menu' iconName='ios-menu'
                        onPress={() => { navigation.toggleDrawer() }} />
                </HeaderButtons>
            )
    }
}

export default createHeaderLeftMenu