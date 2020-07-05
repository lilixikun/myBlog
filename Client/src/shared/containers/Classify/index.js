import React, { PureComponent, Fragment } from 'react'
import { connect } from 'react-redux'
import withStyles from 'isomorphic-style-loader/withStyles'
import * as actions from './store/actions'
import styles from './index.less'

class Classify extends PureComponent {

    componentDidMount() {
        const { dataList, getTagList } = this.props
        if (dataList.length === 0) {
            getTagList()
        }

        setTimeout(() => {
            this.init()
        }, 1000);
    }

    init() {
        //1.获取元素
        var oWrap = document.getElementById('box');
        var oImg = oWrap.children;

        // var oImgLen=oImg.length;
        var deg = 360 / oImg.length;//3.每个需要旋转的度数

        // 定义一个开始的度数
        var roX = -10;
        var roY = 0;
        var x, y, x_, y_, xN, yN, time = null;
        //2.遍历所有的img标签
        for (var i = 0; i < oImg.length; i++) {
            oImg[i].style.transform = 'rotateY(' + i * deg + 'deg) translateZ(350px)';
            oImg[i].style.transition = ' all 1s ' + (oImg.length - i - 1) * 0.1 + 's';
            //transition:设置过渡
            oImg[i].ondragstart = function () {
                return false;
            }
        }
        //3.事件处理
        document.onmousedown = function (e) {
            clearInterval(time);
            e = e || window.event;
            x_ = e.clientX;
            y_ = e.clientY;
            // console.log ( "鼠标按下了" )
            this.onmousemove = function (e) {
                e = e || window.event;
                //获取滚动的X和Y轴
                //client:鼠标触发点相对于页面可视区域左上角距离
                x = e.clientX;
                y = e.clientY;
                //两点之间的差值:第一次走的时候两值相等,第二次走的时候x已经更新,但x_没更新,所以两个差值就是xN;
                xN = x - x_;
                yN = y - y_;
                //差值拼接到旋转的Y里面去
                roY += xN * 0.2;//水平拖影响Y轴;
                roX -= yN * 0.2;
                oWrap.style.transform = 'perspective(800px) rotateX(' + roX + 'deg) rotateY(' + roY + 'deg)';
                // var oDiv =document.createElement('div');
                // this.body.appendChild(oDiv);
                // oDiv.style.cssText='width:5px;height:5px; background:red;position:absolute;left:'+x+"px;top:"+y+"px";这三行是测试用的
                x_ = e.clientX;
                y_ = e.clientY;
            }
            this.onmouseup = function () {
                //  console.log ( "鼠标抬起了" )
                this.onmousemove = null;
                //设置一个定时器,实现后面惯性效果8
                time = setInterval(function () {

                    //无限乘以零点95它会接近0的状态
                    xN *= 0.95;
                    yN *= 0.95;
                    //当它小到0.1时停止计时器
                    if (Math.abs(xN) < 0.1 && Math.abs(yN) < 0.1) {//Math.abs()是返回绝对值
                        clearInterval(time);
                    }
                    //差值拼接到旋转的Y里面去
                    roY += xN * 0.2;//水平拖影响Y轴;
                    roX -= yN * 0.2;
                    oWrap.style.transform = 'perspective(800px) rotateX(' + roX + 'deg) rotateY(' + roY + 'deg)';

                }, 30)
            }
        }
    }


    goTag(uid) {
        const win = window.open(`${window.location.origin}/tag?tagUid=${uid}`, '_blank');
        win.focus();
    }

    render() {
        const { dataList } = this.props

        return (
            <div className="classify-wrapper">
                <div id="box">
                    {
                        dataList.map(item => (
                            <img src={`http://localhost:8085/file_type_${item.img}.svg`} key={item.uid} onClick={() => this.goTag(item.uid)} />
                        ))
                    }
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({ classify }) => ({
    dataList: classify.dataList,
})

const mapDispatchToProps = dispatch => {
    return {
        getTagList: () => dispatch(actions.getTagList()),
    }
}

const ExportClassify = connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Classify))

ExportClassify.loadData = async store => {
    await store.dispatch(actions.getTagList())
}

export default ExportClassify