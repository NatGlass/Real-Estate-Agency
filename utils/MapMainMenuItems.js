import { v4 as uuid } from "uuid"

const MapMainMenuItems = (menuItems) => {
    return menuItems.map(menuItem => ({
        id: uuid(),
        destination: menuItem.menuItem.destination?.uri,
        label: menuItem.menuItem.label,
        subMenuItems: (menuItem.items || []).map(subMenuItem => ({
            id: uuid(),
            destination: subMenuItem.destination?.uri,
            label: subMenuItem.label
        }))
    }))
}

export default MapMainMenuItems