import { TextStyle, ViewStyle } from 'react-native';

// 剩余空间填充
export const flex: ViewStyle = { flex: 1 };

// 横向排列
export const fdr: ViewStyle = {
    flexDirection: 'row',
};

// 纵向排列
export const fdc: ViewStyle = {
    flexDirection: 'column',
};

// flex 居中
export const flexCenter: ViewStyle = {
    justifyContent: 'center',
    alignItems: 'center',
};

// between
export const between: ViewStyle = {
    justifyContent: 'space-between',
};

// around
export const around: ViewStyle = {
    justifyContent: 'space-around',
};

// evenly
export const evenly: ViewStyle = {
    justifyContent: 'space-evenly',
};

// end
export const end: ViewStyle = {
    justifyContent: 'flex-end',
};

// baseline
export const baseline: ViewStyle = {
    alignItems: 'baseline',
};

// align-items center
export const aicenter: ViewStyle = {
    alignItems: 'center',
};

// 横向居中
export const xcenter: ViewStyle = {
    ...fdr,
    ...flexCenter,
};

// 横向 between
export const xbetween: ViewStyle = {
    ...fdr,
    ...between,
};

// 横向 around
export const xaround: ViewStyle = {
    ...fdr,
    ...around,
};

// 横向 evenly
export const xevenly: ViewStyle = {
    ...fdr,
    ...evenly,
};

// 横向end
export const xend: ViewStyle = {
    ...fdr,
    ...end,
};

// 纵向居中
export const ycenter: ViewStyle = {
    ...fdc,
    ...flexCenter,
};

// 横向 between
export const ybetween: ViewStyle = {
    ...fdc,
    ...between,
};

// 横向 around
export const yaround: ViewStyle = {
    ...fdc,
    ...around,
};

// 横向 evenly
export const yevenly: ViewStyle = {
    ...fdc,
    ...evenly,
};

// 横向end
export const yend: ViewStyle = {
    ...fdc,
    ...end,
};

// 盒模型居中
export const boxCenter: ViewStyle = {
    marginLeft: 'auto',
    marginRight: 'auto',
};

// 溢出隐藏
export const hidden: ViewStyle = {
    overflow: 'hidden',
};

// 圆角
// 圆
export const circle: ViewStyle = {
    borderRadius: 50,
};

// 圆弧
export const arc: ViewStyle = {
    borderRadius: 10,
};

// 字体
export const fontFamily: TextStyle = {
    fontFamily: '',
};

// 标题字体大小
export const fontTitle: TextStyle = {
    fontSize: 24,
};

// 描述文本字体大小
export const fontDesc: TextStyle = {
    fontSize: 16,
};

// 字体加粗
export const bold: TextStyle = {
    fontWeight: 'bold',
};

// 常规
export const normal: TextStyle = {
    fontWeight: 'normal',
};
