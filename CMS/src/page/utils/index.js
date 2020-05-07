// import { pathToRegexp } from 'path-to-regexp';
import { reduce, filter, map } from 'lodash';

export const layout = {
    labelCol: {
        span: 6
    },
    wrapperCol: {
        span: 16
    }
}

export const largeLayout = {
    labelCol: { span: 2 },
    wrapperCol: { span: 20 },
};

export const formLayout = {
    labelCol: {
        span: 6
    },
    wrapperCol: {
        span: 16
    },
}

export const buttonItemLayout = {
    wrapperCol: {
        span: 14,
        offset: 4
    }
}

export const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};

//userinfo/2144/id => ['/userinfo','/useinfo/2144,'/userindo/2144/id']
export const urlToList = (url) => {
    if (url) {
        const urlList = url.split('/').filter(i => i);
        return map(urlList, (urlItem, index) => `/${urlList.slice(0, index + 1).join('/')}`);
    }
    return [];
}

// 又因为初始时菜单数据是树形结构的，不利于进行 path 属性的匹配，所以我们还需要先将树形结构的菜单数据扁平化，然后再传入 getMeunMatchKeys 中。
export const getFlatMenuKeys = menuData => (
    reduce(menuData, (keys, item) => {
        keys.push(item.path);
        if (item.children) {
            return keys.concat(getFlatMenuKeys(item.children));
        }
        return keys;
    }, [])
);


/**
 * 引入 path-to-regexp 这个库来处理类似 /outlets/1 和 /outlets/:id 这样的路径。
 * @param  flatMenuKeys: [/abc, /abc/:id, /abc/:id/info]
 * @param  paths: [/abc, /abc/11, /abc/11/info]
 */
// export const getMeunMatchKeys = (flatMenuKeys, paths) =>
//     reduce(paths, (matchKeys, path) => (
//         matchKeys.concat(filter(flatMenuKeys, item => pathToRegexp(item).test(path)))
//     ), []);

