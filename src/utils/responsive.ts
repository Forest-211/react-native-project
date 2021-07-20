import { Dimensions, Platform } from 'react-native';

const { OS, select } = Platform;

// 获取当前设备的视口宽高
const { width: viewportWidth, height: viewportHeight } =
    Dimensions.get('window');

// 设计稿的基准宽高
const DESIGN_DIMENSIONS = { width: 750, height: 1334 };

/**
 * @description 获取百分比高度
 * @param heightParam 百分比
 * @returns 返回当前设备系统的动态计算高度
 */
// TODO 根据当前设备的系统环境返回还是全部返回？
export const getPercentageHeight = (heightParam: number) => {
    return Platform.select({
        ios: viewportHeight * (heightParam / DESIGN_DIMENSIONS.height),
        android: heightParam,
    });
};

/**
 * @description 获取百分比宽度
 * @param heightParam 百分比
 * @returns 返回当前设备系统的动态计算宽度
 */
export const getPercentageWidth = (widthParam: number) => {
    return Platform.select({
        ios: viewportWidth * (widthParam / DESIGN_DIMENSIONS.width),
        android: widthParam,
    });
};

export { OS, select, viewportWidth, viewportHeight };
