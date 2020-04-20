/**
 * 获取选中的Tab
 * @param {*} url 
 */
export const getActivePath = (url) => {
    const path = url.split("?")[1]
    return path
}