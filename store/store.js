import {action, observable} from 'mobx-miniprogram'
export const store = observable({
    activeTabbarIndex:0,
    updateActivateTabbarIndex:action(function(index){this.activeTabbarIndex = index})
})