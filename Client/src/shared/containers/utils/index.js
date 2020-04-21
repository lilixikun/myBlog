/**
 * 获取选中的Tab
 * @param {*} url 
 */
export const getActivePath = (url) => {
    const path = url.split("?")[1]
    return path
}

// 随机生成颜色RGB  核心点 ：（0,0,0)   rgb  每一组的数字取值范围是  0~255 
export const getRandomColor = () => {
    // 需要随机生成 0~255 之间的整数
    function getRandom(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    var c1 = getRandom(0, 255);
    var c2 = getRandom(0, 255);
    var c3 = getRandom(0, 255);
    return 'rgba(' + c1 + ',' + c2 + ',' + c3 + ',' + 0.8 + ')'
}
