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
export function urlToList(url) {
    const urllist = url.split('/').filter(i => i);
    return urllist.map((urlItem, index) => {
        return `/${urllist.slice(0, index + 1).join('/')}`;
    });
}
