import '../../base';
import React from 'react';
import IBaseProps from '../../base/baseProps';
import BaseComponent from '../../base/baseComponent';
export interface ITagProps extends IBaseProps {
    activeColor?: string;
    closable?: boolean;
    selected?: boolean;
    disabled?: boolean;
    type?: string;
    onClose?: (e: any) => void;
    onClick?: (e: any) => void;
}
/**
 * Tag
 * @prop {boolean} closable 标签是否可以关闭
 * @prop {string} activeColor 	标签选中颜色
 * @prop {string} selected 	是否默认选中
 * @prop {string} disabled 	是否不可用
 * @prop {string} type 	标签模式（默认'normal'或者'recommend'）
 * @prop {function} onClose 关闭时的回调
 * @prop {function} onClick click 事件触发的回调函数
 */
export default class Tag extends BaseComponent<ITagProps, any> {
    static defaultProps: {
        activeColor: string;
        selected: boolean;
        disabled: boolean;
        closable: boolean;
        type: string;
        onClose(): void;
        onClick(): void;
    };
    constructor(props: any);
    private onClose;
    private onClick;
    getTagStyle: () => {
        alignContent?: string;
        alignItems?: string;
        alignSelf?: string;
        animationDelay?: string;
        animationDirection?: string;
        animationDuration?: string;
        animationFillMode?: string;
        animationIterationCount?: React.ReactText;
        animationName?: string;
        animationPlayState?: string;
        animationTimingFunction?: string;
        appearance?: import("csstype").AppearanceProperty;
        aspectRatio?: string;
        backdropFilter?: string;
        backfaceVisibility?: import("csstype").BackfaceVisibilityProperty;
        backgroundAttachment?: string;
        backgroundBlendMode?: string;
        backgroundClip?: string;
        backgroundColor?: string;
        backgroundImage?: string;
        backgroundOrigin?: string;
        backgroundPosition?: React.ReactText;
        backgroundPositionX?: React.ReactText;
        backgroundPositionY?: React.ReactText;
        backgroundRepeat?: string;
        backgroundSize?: React.ReactText;
        blockOverflow?: string;
        blockSize?: React.ReactText;
        borderBlockColor?: string;
        borderBlockEndColor?: string;
        borderBlockEndStyle?: import("csstype").BorderBlockEndStyleProperty;
        borderBlockEndWidth?: React.ReactText;
        borderBlockStartColor?: string;
        borderBlockStartStyle?: import("csstype").BorderBlockEndStyleProperty;
        borderBlockStartWidth?: React.ReactText;
        borderBlockStyle?: import("csstype").BorderBlockEndStyleProperty;
        borderBlockWidth?: React.ReactText;
        borderBottomColor?: string;
        borderBottomLeftRadius?: React.ReactText;
        borderBottomRightRadius?: React.ReactText;
        borderBottomStyle?: import("csstype").BorderBlockEndStyleProperty;
        borderBottomWidth?: React.ReactText;
        borderCollapse?: import("csstype").BorderCollapseProperty;
        borderEndEndRadius?: React.ReactText;
        borderEndStartRadius?: React.ReactText;
        borderImageOutset?: React.ReactText;
        borderImageRepeat?: string;
        borderImageSlice?: React.ReactText;
        borderImageSource?: string;
        borderImageWidth?: React.ReactText;
        borderInlineColor?: string;
        borderInlineEndColor?: string;
        borderInlineEndStyle?: import("csstype").BorderBlockEndStyleProperty;
        borderInlineEndWidth?: React.ReactText;
        borderInlineStartColor?: string;
        borderInlineStartStyle?: import("csstype").BorderBlockEndStyleProperty;
        borderInlineStartWidth?: React.ReactText;
        borderInlineStyle?: import("csstype").BorderBlockEndStyleProperty;
        borderInlineWidth?: React.ReactText;
        borderLeftColor?: string;
        borderLeftStyle?: import("csstype").BorderBlockEndStyleProperty;
        borderLeftWidth?: React.ReactText;
        borderRightColor?: string;
        borderRightStyle?: import("csstype").BorderBlockEndStyleProperty;
        borderRightWidth?: React.ReactText;
        borderSpacing?: React.ReactText;
        borderStartEndRadius?: React.ReactText;
        borderStartStartRadius?: React.ReactText;
        borderTopColor?: string;
        borderTopLeftRadius?: React.ReactText;
        borderTopRightRadius?: React.ReactText;
        borderTopStyle?: import("csstype").BorderBlockEndStyleProperty;
        borderTopWidth?: React.ReactText;
        bottom?: React.ReactText;
        boxDecorationBreak?: import("csstype").BoxDecorationBreakProperty;
        boxShadow?: string;
        boxSizing?: import("csstype").BoxSizingProperty;
        breakAfter?: import("csstype").BreakAfterProperty;
        breakBefore?: import("csstype").BreakAfterProperty;
        breakInside?: import("csstype").BreakInsideProperty;
        captionSide?: import("csstype").CaptionSideProperty;
        caretColor?: string;
        clear?: import("csstype").ClearProperty;
        clipPath?: string;
        color?: string;
        colorAdjust?: import("csstype").ColorAdjustProperty;
        columnCount?: import("csstype").ColumnCountProperty;
        columnFill?: import("csstype").ColumnFillProperty;
        columnGap?: React.ReactText;
        columnRuleColor?: string;
        columnRuleStyle?: string;
        columnRuleWidth?: React.ReactText;
        columnSpan?: import("csstype").ColumnSpanProperty;
        columnWidth?: React.ReactText;
        contain?: string;
        content?: string;
        counterIncrement?: string;
        counterReset?: string;
        counterSet?: string;
        cursor?: string;
        direction?: import("csstype").DirectionProperty;
        display?: string;
        emptyCells?: import("csstype").EmptyCellsProperty;
        filter?: string;
        flexBasis?: React.ReactText;
        flexDirection?: import("csstype").FlexDirectionProperty;
        flexGrow?: import("csstype").GlobalsNumber;
        flexShrink?: import("csstype").GlobalsNumber;
        flexWrap?: import("csstype").FlexWrapProperty;
        float?: import("csstype").FloatProperty;
        fontFamily?: string;
        fontFeatureSettings?: string;
        fontKerning?: import("csstype").FontKerningProperty;
        fontLanguageOverride?: string;
        fontOpticalSizing?: import("csstype").FontOpticalSizingProperty;
        fontSize?: React.ReactText;
        fontSizeAdjust?: import("csstype").FontSizeAdjustProperty;
        fontStretch?: string;
        fontStyle?: string;
        fontSynthesis?: string;
        fontVariant?: string;
        fontVariantCaps?: import("csstype").FontVariantCapsProperty;
        fontVariantEastAsian?: string;
        fontVariantLigatures?: string;
        fontVariantNumeric?: string;
        fontVariantPosition?: import("csstype").FontVariantPositionProperty;
        fontVariationSettings?: string;
        fontWeight?: import("csstype").FontWeightProperty;
        gridAutoColumns?: React.ReactText;
        gridAutoFlow?: string;
        gridAutoRows?: React.ReactText;
        gridColumnEnd?: React.ReactText;
        gridColumnStart?: React.ReactText;
        gridRowEnd?: React.ReactText;
        gridRowStart?: React.ReactText;
        gridTemplateAreas?: string;
        gridTemplateColumns?: React.ReactText;
        gridTemplateRows?: React.ReactText;
        hangingPunctuation?: string;
        height?: React.ReactText;
        hyphens?: import("csstype").HyphensProperty;
        imageOrientation?: string;
        imageRendering?: import("csstype").ImageRenderingProperty;
        imageResolution?: string;
        initialLetter?: React.ReactText;
        inlineSize?: React.ReactText;
        inset?: React.ReactText;
        insetBlock?: React.ReactText;
        insetBlockEnd?: React.ReactText;
        insetBlockStart?: React.ReactText;
        insetInline?: React.ReactText;
        insetInlineEnd?: React.ReactText;
        insetInlineStart?: React.ReactText;
        isolation?: import("csstype").IsolationProperty;
        justifyContent?: string;
        justifyItems?: string;
        justifySelf?: string;
        left?: React.ReactText;
        letterSpacing?: React.ReactText;
        lineBreak?: import("csstype").LineBreakProperty;
        lineHeight?: React.ReactText;
        lineHeightStep?: React.ReactText;
        listStyleImage?: string;
        listStylePosition?: import("csstype").ListStylePositionProperty;
        listStyleType?: string;
        marginBlock?: React.ReactText;
        marginBlockEnd?: React.ReactText;
        marginBlockStart?: React.ReactText;
        marginBottom?: React.ReactText;
        marginInline?: React.ReactText;
        marginInlineEnd?: React.ReactText;
        marginInlineStart?: React.ReactText;
        marginLeft?: React.ReactText;
        marginRight?: React.ReactText;
        marginTop?: React.ReactText;
        maskBorderMode?: import("csstype").MaskBorderModeProperty;
        maskBorderOutset?: React.ReactText;
        maskBorderRepeat?: string;
        maskBorderSlice?: React.ReactText;
        maskBorderSource?: string;
        maskBorderWidth?: React.ReactText;
        maskClip?: string;
        maskComposite?: string;
        maskImage?: string;
        maskMode?: string;
        maskOrigin?: string;
        maskPosition?: React.ReactText;
        maskRepeat?: string;
        maskSize?: React.ReactText;
        maskType?: import("csstype").MaskBorderModeProperty;
        maxBlockSize?: React.ReactText;
        maxHeight?: React.ReactText;
        maxInlineSize?: React.ReactText;
        maxLines?: import("csstype").FontSizeAdjustProperty;
        maxWidth?: React.ReactText;
        minBlockSize?: React.ReactText;
        minHeight?: React.ReactText;
        minInlineSize?: React.ReactText;
        minWidth?: React.ReactText;
        mixBlendMode?: import("csstype").MixBlendModeProperty;
        motionDistance?: React.ReactText;
        motionPath?: string;
        motionRotation?: string;
        objectFit?: import("csstype").ObjectFitProperty;
        objectPosition?: React.ReactText;
        offsetAnchor?: React.ReactText;
        offsetDistance?: React.ReactText;
        offsetPath?: string;
        offsetRotate?: string;
        offsetRotation?: string;
        opacity?: React.ReactText;
        order?: import("csstype").GlobalsNumber;
        orphans?: import("csstype").GlobalsNumber;
        outlineColor?: string;
        outlineOffset?: React.ReactText;
        outlineStyle?: string;
        outlineWidth?: React.ReactText;
        overflow?: string;
        overflowAnchor?: import("csstype").FontOpticalSizingProperty;
        overflowBlock?: import("csstype").OverflowBlockProperty;
        overflowClipBox?: import("csstype").OverflowClipBoxProperty;
        overflowInline?: import("csstype").OverflowBlockProperty;
        overflowWrap?: import("csstype").OverflowWrapProperty;
        overflowX?: import("csstype").OverflowBlockProperty;
        overflowY?: import("csstype").OverflowBlockProperty;
        overscrollBehavior?: string;
        overscrollBehaviorX?: import("csstype").OverscrollBehaviorXProperty;
        overscrollBehaviorY?: import("csstype").OverscrollBehaviorXProperty;
        paddingBlock?: React.ReactText;
        paddingBlockEnd?: React.ReactText;
        paddingBlockStart?: React.ReactText;
        paddingBottom?: React.ReactText;
        paddingInline?: React.ReactText;
        paddingInlineEnd?: React.ReactText;
        paddingInlineStart?: React.ReactText;
        paddingLeft?: React.ReactText;
        paddingRight?: React.ReactText;
        paddingTop?: React.ReactText;
        pageBreakAfter?: import("csstype").PageBreakAfterProperty;
        pageBreakBefore?: import("csstype").PageBreakAfterProperty;
        pageBreakInside?: import("csstype").PageBreakInsideProperty;
        paintOrder?: string;
        perspective?: React.ReactText;
        perspectiveOrigin?: React.ReactText;
        placeContent?: string;
        pointerEvents?: import("csstype").PointerEventsProperty;
        position?: import("csstype").PositionProperty;
        quotes?: string;
        resize?: import("csstype").ResizeProperty;
        right?: React.ReactText;
        rotate?: string;
        rowGap?: React.ReactText;
        rubyAlign?: import("csstype").RubyAlignProperty;
        rubyMerge?: import("csstype").RubyMergeProperty;
        rubyPosition?: import("csstype").RubyPositionProperty;
        scale?: React.ReactText;
        scrollBehavior?: import("csstype").ScrollBehaviorProperty;
        scrollMargin?: React.ReactText;
        scrollMarginBlock?: React.ReactText;
        scrollMarginBlockEnd?: React.ReactText;
        scrollMarginBlockStart?: React.ReactText;
        scrollMarginBottom?: React.ReactText;
        scrollMarginInline?: React.ReactText;
        scrollMarginInlineEnd?: React.ReactText;
        scrollMarginInlineStart?: React.ReactText;
        scrollMarginLeft?: React.ReactText;
        scrollMarginRight?: React.ReactText;
        scrollMarginTop?: React.ReactText;
        scrollPadding?: React.ReactText;
        scrollPaddingBlock?: React.ReactText;
        scrollPaddingBlockEnd?: React.ReactText;
        scrollPaddingBlockStart?: React.ReactText;
        scrollPaddingBottom?: React.ReactText;
        scrollPaddingInline?: React.ReactText;
        scrollPaddingInlineEnd?: React.ReactText;
        scrollPaddingInlineStart?: React.ReactText;
        scrollPaddingLeft?: React.ReactText;
        scrollPaddingRight?: React.ReactText;
        scrollPaddingTop?: React.ReactText;
        scrollSnapAlign?: string;
        scrollSnapStop?: import("csstype").ScrollSnapStopProperty;
        scrollSnapType?: string;
        scrollbarColor?: string;
        scrollbarWidth?: import("csstype").ScrollbarWidthProperty;
        shapeImageThreshold?: React.ReactText;
        shapeMargin?: React.ReactText;
        shapeOutside?: string;
        tabSize?: React.ReactText;
        tableLayout?: import("csstype").TableLayoutProperty;
        textAlign?: import("csstype").TextAlignProperty;
        textAlignLast?: import("csstype").TextAlignLastProperty;
        textCombineUpright?: string;
        textDecorationColor?: string;
        textDecorationLine?: string;
        textDecorationSkip?: string;
        textDecorationSkipInk?: import("csstype").FontOpticalSizingProperty;
        textDecorationStyle?: import("csstype").TextDecorationStyleProperty;
        textDecorationThickness?: React.ReactText;
        textDecorationWidth?: React.ReactText;
        textEmphasisColor?: string;
        textEmphasisPosition?: string;
        textEmphasisStyle?: string;
        textIndent?: React.ReactText;
        textJustify?: import("csstype").TextJustifyProperty;
        textOrientation?: import("csstype").TextOrientationProperty;
        textOverflow?: string;
        textRendering?: import("csstype").TextRenderingProperty;
        textShadow?: string;
        textSizeAdjust?: string;
        textTransform?: import("csstype").TextTransformProperty;
        textUnderlineOffset?: React.ReactText;
        textUnderlinePosition?: string;
        top?: React.ReactText;
        touchAction?: string;
        transform?: string;
        transformBox?: import("csstype").TransformBoxProperty;
        transformOrigin?: React.ReactText;
        transformStyle?: import("csstype").TransformStyleProperty;
        transitionDelay?: string;
        transitionDuration?: string;
        transitionProperty?: string;
        transitionTimingFunction?: string;
        translate?: React.ReactText;
        unicodeBidi?: import("csstype").UnicodeBidiProperty;
        userSelect?: import("csstype").UserSelectProperty;
        verticalAlign?: React.ReactText;
        visibility?: import("csstype").VisibilityProperty;
        whiteSpace?: import("csstype").WhiteSpaceProperty;
        widows?: import("csstype").GlobalsNumber;
        width?: React.ReactText;
        willChange?: string;
        wordBreak?: import("csstype").WordBreakProperty;
        wordSpacing?: React.ReactText;
        wordWrap?: import("csstype").WordWrapProperty;
        writingMode?: import("csstype").WritingModeProperty;
        zIndex?: import("csstype").ColumnCountProperty;
        zoom?: React.ReactText;
        all?: import("csstype").Globals;
        animation?: React.ReactText;
        background?: React.ReactText;
        border?: React.ReactText;
        borderBlock?: React.ReactText;
        borderBlockEnd?: React.ReactText;
        borderBlockStart?: React.ReactText;
        borderBottom?: React.ReactText;
        borderColor?: string;
        borderImage?: React.ReactText;
        borderInline?: React.ReactText;
        borderInlineEnd?: React.ReactText;
        borderInlineStart?: React.ReactText;
        borderLeft?: React.ReactText;
        borderRadius?: React.ReactText;
        borderRight?: React.ReactText;
        borderStyle?: string;
        borderTop?: React.ReactText;
        borderWidth?: React.ReactText;
        columnRule?: React.ReactText;
        columns?: React.ReactText;
        flex?: React.ReactText;
        flexFlow?: string;
        font?: string;
        gap?: React.ReactText;
        grid?: string;
        gridArea?: React.ReactText;
        gridColumn?: React.ReactText;
        gridRow?: React.ReactText;
        gridTemplate?: string;
        lineClamp?: import("csstype").FontSizeAdjustProperty;
        listStyle?: string;
        margin?: React.ReactText;
        mask?: React.ReactText;
        maskBorder?: React.ReactText;
        motion?: React.ReactText;
        offset?: React.ReactText;
        outline?: React.ReactText;
        padding?: React.ReactText;
        placeItems?: string;
        placeSelf?: string;
        textDecoration?: React.ReactText;
        textEmphasis?: string;
        transition?: string;
        MozAnimationDelay?: string;
        MozAnimationDirection?: string;
        MozAnimationDuration?: string;
        MozAnimationFillMode?: string;
        MozAnimationIterationCount?: React.ReactText;
        MozAnimationName?: string;
        MozAnimationPlayState?: string;
        MozAnimationTimingFunction?: string;
        MozAppearance?: import("csstype").MozAppearanceProperty;
        MozBackfaceVisibility?: import("csstype").BackfaceVisibilityProperty;
        MozBorderEndColor?: string;
        MozBorderEndStyle?: import("csstype").BorderBlockEndStyleProperty;
        MozBorderEndWidth?: React.ReactText;
        MozBorderStartColor?: string;
        MozBorderStartStyle?: import("csstype").BorderBlockEndStyleProperty;
        MozBoxSizing?: import("csstype").BoxSizingProperty;
        MozColumnCount?: import("csstype").ColumnCountProperty;
        MozColumnFill?: import("csstype").ColumnFillProperty;
        MozColumnGap?: React.ReactText;
        MozColumnRuleColor?: string;
        MozColumnRuleStyle?: string;
        MozColumnRuleWidth?: React.ReactText;
        MozColumnWidth?: React.ReactText;
        MozContextProperties?: string;
        MozFloatEdge?: import("csstype").MozFloatEdgeProperty;
        MozFontFeatureSettings?: string;
        MozFontLanguageOverride?: string;
        MozForceBrokenImageIcon?: import("csstype").GlobalsNumber;
        MozHyphens?: import("csstype").HyphensProperty;
        MozImageRegion?: string;
        MozMarginEnd?: React.ReactText;
        MozMarginStart?: React.ReactText;
        MozOrient?: import("csstype").MozOrientProperty;
        MozOutlineRadiusBottomleft?: React.ReactText;
        MozOutlineRadiusBottomright?: React.ReactText;
        MozOutlineRadiusTopleft?: React.ReactText;
        MozOutlineRadiusTopright?: React.ReactText;
        MozPaddingEnd?: React.ReactText;
        MozPaddingStart?: React.ReactText;
        MozPerspective?: React.ReactText;
        MozPerspectiveOrigin?: React.ReactText;
        MozStackSizing?: import("csstype").MozStackSizingProperty;
        MozTabSize?: React.ReactText;
        MozTextSizeAdjust?: string;
        MozTransformOrigin?: React.ReactText;
        MozTransformStyle?: import("csstype").TransformStyleProperty;
        MozTransitionDelay?: string;
        MozTransitionDuration?: string;
        MozTransitionProperty?: string;
        MozTransitionTimingFunction?: string;
        MozUserFocus?: import("csstype").MozUserFocusProperty;
        MozUserModify?: import("csstype").MozUserModifyProperty;
        MozUserSelect?: import("csstype").UserSelectProperty;
        MozWindowDragging?: import("csstype").MozWindowDraggingProperty;
        msAccelerator?: import("csstype").MsAcceleratorProperty;
        msAlignSelf?: string;
        msBlockProgression?: import("csstype").MsBlockProgressionProperty;
        msContentZoomChaining?: import("csstype").MsContentZoomChainingProperty;
        msContentZoomLimitMax?: string;
        msContentZoomLimitMin?: string;
        msContentZoomSnapPoints?: string;
        msContentZoomSnapType?: import("csstype").MsContentZoomSnapTypeProperty;
        msContentZooming?: import("csstype").MsContentZoomingProperty;
        msFilter?: string;
        msFlexDirection?: import("csstype").FlexDirectionProperty;
        msFlexPositive?: import("csstype").GlobalsNumber;
        msFlowFrom?: string;
        msFlowInto?: string;
        msGridColumns?: React.ReactText;
        msGridRows?: React.ReactText;
        msHighContrastAdjust?: import("csstype").FontOpticalSizingProperty;
        msHyphenateLimitChars?: React.ReactText;
        msHyphenateLimitLines?: import("csstype").MsHyphenateLimitLinesProperty;
        msHyphenateLimitZone?: React.ReactText;
        msHyphens?: import("csstype").HyphensProperty;
        msImeAlign?: import("csstype").MsImeAlignProperty;
        msLineBreak?: import("csstype").LineBreakProperty;
        msOrder?: import("csstype").GlobalsNumber;
        msOverflowStyle?: import("csstype").MsOverflowStyleProperty;
        msOverflowX?: import("csstype").OverflowBlockProperty;
        msOverflowY?: import("csstype").OverflowBlockProperty;
        msScrollChaining?: import("csstype").MsContentZoomChainingProperty;
        msScrollLimitXMax?: React.ReactText;
        msScrollLimitXMin?: React.ReactText;
        msScrollLimitYMax?: React.ReactText;
        msScrollLimitYMin?: React.ReactText;
        msScrollRails?: import("csstype").MsScrollRailsProperty;
        msScrollSnapPointsX?: string;
        msScrollSnapPointsY?: string;
        msScrollSnapType?: import("csstype").MsContentZoomSnapTypeProperty;
        msScrollTranslation?: import("csstype").MsScrollTranslationProperty;
        msScrollbar3dlightColor?: string;
        msScrollbarArrowColor?: string;
        msScrollbarBaseColor?: string;
        msScrollbarDarkshadowColor?: string;
        msScrollbarFaceColor?: string;
        msScrollbarHighlightColor?: string;
        msScrollbarShadowColor?: string;
        msScrollbarTrackColor?: string;
        msTextAutospace?: import("csstype").MsTextAutospaceProperty;
        msTextCombineHorizontal?: string;
        msTextOverflow?: string;
        msTouchAction?: string;
        msTouchSelect?: import("csstype").MsTouchSelectProperty;
        msTransform?: string;
        msTransformOrigin?: React.ReactText;
        msTransitionDelay?: string;
        msTransitionDuration?: string;
        msTransitionProperty?: string;
        msTransitionTimingFunction?: string;
        msUserSelect?: import("csstype").MsUserSelectProperty;
        msWordBreak?: import("csstype").WordBreakProperty;
        msWrapFlow?: import("csstype").MsWrapFlowProperty;
        msWrapMargin?: React.ReactText;
        msWrapThrough?: import("csstype").MsWrapThroughProperty;
        msWritingMode?: import("csstype").WritingModeProperty;
        OObjectFit?: import("csstype").ObjectFitProperty;
        OObjectPosition?: React.ReactText;
        OTabSize?: React.ReactText;
        OTextOverflow?: string;
        OTransformOrigin?: React.ReactText;
        WebkitAlignContent?: string;
        WebkitAlignItems?: string;
        WebkitAlignSelf?: string;
        WebkitAnimationDelay?: string;
        WebkitAnimationDirection?: string;
        WebkitAnimationDuration?: string;
        WebkitAnimationFillMode?: string;
        WebkitAnimationIterationCount?: React.ReactText;
        WebkitAnimationName?: string;
        WebkitAnimationPlayState?: string;
        WebkitAnimationTimingFunction?: string;
        WebkitAppearance?: import("csstype").WebkitAppearanceProperty;
        WebkitBackdropFilter?: string;
        WebkitBackfaceVisibility?: import("csstype").BackfaceVisibilityProperty;
        WebkitBackgroundClip?: string;
        WebkitBackgroundOrigin?: string;
        WebkitBackgroundSize?: React.ReactText;
        WebkitBorderBeforeColor?: string;
        WebkitBorderBeforeStyle?: string;
        WebkitBorderBeforeWidth?: React.ReactText;
        WebkitBorderBottomLeftRadius?: React.ReactText;
        WebkitBorderBottomRightRadius?: React.ReactText;
        WebkitBorderImageSlice?: React.ReactText;
        WebkitBorderTopLeftRadius?: React.ReactText;
        WebkitBorderTopRightRadius?: React.ReactText;
        WebkitBoxDecorationBreak?: import("csstype").BoxDecorationBreakProperty;
        WebkitBoxReflect?: React.ReactText;
        WebkitBoxShadow?: string;
        WebkitBoxSizing?: import("csstype").BoxSizingProperty;
        WebkitClipPath?: string;
        WebkitColorAdjust?: import("csstype").ColorAdjustProperty;
        WebkitColumnCount?: import("csstype").ColumnCountProperty;
        WebkitColumnFill?: import("csstype").ColumnFillProperty;
        WebkitColumnGap?: React.ReactText;
        WebkitColumnRuleColor?: string;
        WebkitColumnRuleStyle?: string;
        WebkitColumnRuleWidth?: React.ReactText;
        WebkitColumnSpan?: import("csstype").ColumnSpanProperty;
        WebkitColumnWidth?: React.ReactText;
        WebkitFilter?: string;
        WebkitFlexBasis?: React.ReactText;
        WebkitFlexDirection?: import("csstype").FlexDirectionProperty;
        WebkitFlexGrow?: import("csstype").GlobalsNumber;
        WebkitFlexShrink?: import("csstype").GlobalsNumber;
        WebkitFlexWrap?: import("csstype").FlexWrapProperty;
        WebkitFontFeatureSettings?: string;
        WebkitFontKerning?: import("csstype").FontKerningProperty;
        WebkitFontVariantLigatures?: string;
        WebkitHyphens?: import("csstype").HyphensProperty;
        WebkitJustifyContent?: string;
        WebkitLineBreak?: import("csstype").LineBreakProperty;
        WebkitLineClamp?: import("csstype").FontSizeAdjustProperty;
        WebkitMarginEnd?: React.ReactText;
        WebkitMarginStart?: React.ReactText;
        WebkitMaskAttachment?: string;
        WebkitMaskClip?: string;
        WebkitMaskComposite?: string;
        WebkitMaskImage?: string;
        WebkitMaskOrigin?: string;
        WebkitMaskPosition?: React.ReactText;
        WebkitMaskPositionX?: React.ReactText;
        WebkitMaskPositionY?: React.ReactText;
        WebkitMaskRepeat?: string;
        WebkitMaskRepeatX?: import("csstype").WebkitMaskRepeatXProperty;
        WebkitMaskRepeatY?: import("csstype").WebkitMaskRepeatXProperty;
        WebkitMaskSize?: React.ReactText;
        WebkitMaxInlineSize?: React.ReactText;
        WebkitOrder?: import("csstype").GlobalsNumber;
        WebkitOverflowScrolling?: import("csstype").WebkitOverflowScrollingProperty;
        WebkitPaddingEnd?: React.ReactText;
        WebkitPaddingStart?: React.ReactText;
        WebkitPerspective?: React.ReactText;
        WebkitPerspectiveOrigin?: React.ReactText;
        WebkitScrollSnapType?: string;
        WebkitShapeMargin?: React.ReactText;
        WebkitTapHighlightColor?: string;
        WebkitTextCombine?: string;
        WebkitTextDecorationColor?: string;
        WebkitTextDecorationLine?: string;
        WebkitTextDecorationSkip?: string;
        WebkitTextDecorationStyle?: import("csstype").TextDecorationStyleProperty;
        WebkitTextEmphasisColor?: string;
        WebkitTextEmphasisPosition?: string;
        WebkitTextEmphasisStyle?: string;
        WebkitTextFillColor?: string;
        WebkitTextOrientation?: import("csstype").TextOrientationProperty;
        WebkitTextSizeAdjust?: string;
        WebkitTextStrokeColor?: string;
        WebkitTextStrokeWidth?: React.ReactText;
        WebkitTouchCallout?: import("csstype").WebkitTouchCalloutProperty;
        WebkitTransform?: string;
        WebkitTransformOrigin?: React.ReactText;
        WebkitTransformStyle?: import("csstype").TransformStyleProperty;
        WebkitTransitionDelay?: string;
        WebkitTransitionDuration?: string;
        WebkitTransitionProperty?: string;
        WebkitTransitionTimingFunction?: string;
        WebkitUserModify?: import("csstype").WebkitUserModifyProperty;
        WebkitUserSelect?: import("csstype").UserSelectProperty;
        WebkitWritingMode?: import("csstype").WritingModeProperty;
        MozAnimation?: React.ReactText;
        MozBorderImage?: React.ReactText;
        MozColumnRule?: React.ReactText;
        MozColumns?: React.ReactText;
        MozTransition?: string;
        msContentZoomLimit?: string;
        msContentZoomSnap?: string;
        msFlex?: React.ReactText;
        msScrollLimit?: string;
        msScrollSnapX?: string;
        msScrollSnapY?: string;
        msTransition?: string;
        WebkitAnimation?: React.ReactText;
        WebkitBorderBefore?: React.ReactText;
        WebkitBorderImage?: React.ReactText;
        WebkitBorderRadius?: React.ReactText;
        WebkitColumnRule?: React.ReactText;
        WebkitColumns?: React.ReactText;
        WebkitFlex?: React.ReactText;
        WebkitFlexFlow?: string;
        WebkitMask?: React.ReactText;
        WebkitTextEmphasis?: string;
        WebkitTextStroke?: React.ReactText;
        WebkitTransition?: string;
        boxAlign?: import("csstype").BoxAlignProperty;
        boxDirection?: import("csstype").BoxDirectionProperty;
        boxFlex?: import("csstype").GlobalsNumber;
        boxFlexGroup?: import("csstype").GlobalsNumber;
        boxLines?: import("csstype").BoxLinesProperty;
        boxOrdinalGroup?: import("csstype").GlobalsNumber;
        boxOrient?: import("csstype").BoxOrientProperty;
        boxPack?: import("csstype").BoxPackProperty;
        clip?: string;
        fontVariantAlternates?: string;
        gridColumnGap?: React.ReactText;
        gridGap?: React.ReactText;
        gridRowGap?: React.ReactText;
        imeMode?: import("csstype").ImeModeProperty;
        offsetBlock?: React.ReactText;
        offsetBlockEnd?: React.ReactText;
        offsetBlockStart?: React.ReactText;
        offsetInline?: React.ReactText;
        offsetInlineEnd?: React.ReactText;
        offsetInlineStart?: React.ReactText;
        scrollSnapCoordinate?: React.ReactText;
        scrollSnapDestination?: React.ReactText;
        scrollSnapPointsX?: string;
        scrollSnapPointsY?: string;
        scrollSnapTypeX?: import("csstype").MsContentZoomSnapTypeProperty;
        scrollSnapTypeY?: import("csstype").MsContentZoomSnapTypeProperty;
        textCombineHorizontal?: string;
        KhtmlBoxAlign?: import("csstype").BoxAlignProperty;
        KhtmlBoxDirection?: import("csstype").BoxDirectionProperty;
        KhtmlBoxFlex?: import("csstype").GlobalsNumber;
        KhtmlBoxFlexGroup?: import("csstype").GlobalsNumber;
        KhtmlBoxLines?: import("csstype").BoxLinesProperty;
        KhtmlBoxOrdinalGroup?: import("csstype").GlobalsNumber;
        KhtmlBoxOrient?: import("csstype").BoxOrientProperty;
        KhtmlBoxPack?: import("csstype").BoxPackProperty;
        KhtmlLineBreak?: import("csstype").LineBreakProperty;
        KhtmlOpacity?: React.ReactText;
        KhtmlUserSelect?: import("csstype").UserSelectProperty;
        MozBackgroundClip?: string;
        MozBackgroundInlinePolicy?: import("csstype").BoxDecorationBreakProperty;
        MozBackgroundOrigin?: string;
        MozBackgroundSize?: React.ReactText;
        MozBinding?: string;
        MozBorderBottomColors?: string;
        MozBorderLeftColors?: string;
        MozBorderRadius?: React.ReactText;
        MozBorderRadiusBottomleft?: React.ReactText;
        MozBorderRadiusBottomright?: React.ReactText;
        MozBorderRadiusTopleft?: React.ReactText;
        MozBorderRadiusTopright?: React.ReactText;
        MozBorderRightColors?: string;
        MozBorderTopColors?: string;
        MozBoxAlign?: import("csstype").BoxAlignProperty;
        MozBoxDirection?: import("csstype").BoxDirectionProperty;
        MozBoxFlex?: import("csstype").GlobalsNumber;
        MozBoxOrdinalGroup?: import("csstype").GlobalsNumber;
        MozBoxOrient?: import("csstype").BoxOrientProperty;
        MozBoxPack?: import("csstype").BoxPackProperty;
        MozBoxShadow?: string;
        MozOpacity?: React.ReactText;
        MozOutline?: React.ReactText;
        MozOutlineColor?: string;
        MozOutlineRadius?: React.ReactText;
        MozOutlineStyle?: string;
        MozOutlineWidth?: React.ReactText;
        MozTextAlignLast?: import("csstype").TextAlignLastProperty;
        MozTextBlink?: import("csstype").MozTextBlinkProperty;
        MozTextDecorationColor?: string;
        MozTextDecorationLine?: string;
        MozTextDecorationStyle?: import("csstype").TextDecorationStyleProperty;
        MozUserInput?: import("csstype").MozUserInputProperty;
        MozWindowShadow?: import("csstype").MozWindowShadowProperty;
        msImeMode?: import("csstype").ImeModeProperty;
        OAnimation?: React.ReactText;
        OAnimationDelay?: string;
        OAnimationDirection?: string;
        OAnimationDuration?: string;
        OAnimationFillMode?: string;
        OAnimationIterationCount?: React.ReactText;
        OAnimationName?: string;
        OAnimationPlayState?: string;
        OAnimationTimingFunction?: string;
        OBackgroundSize?: React.ReactText;
        OBorderImage?: React.ReactText;
        OTransform?: string;
        OTransition?: string;
        OTransitionDelay?: string;
        OTransitionDuration?: string;
        OTransitionProperty?: string;
        OTransitionTimingFunction?: string;
        WebkitBoxAlign?: import("csstype").BoxAlignProperty;
        WebkitBoxDirection?: import("csstype").BoxDirectionProperty;
        WebkitBoxFlex?: import("csstype").GlobalsNumber;
        WebkitBoxFlexGroup?: import("csstype").GlobalsNumber;
        WebkitBoxLines?: import("csstype").BoxLinesProperty;
        WebkitBoxOrdinalGroup?: import("csstype").GlobalsNumber;
        WebkitBoxOrient?: import("csstype").BoxOrientProperty;
        WebkitBoxPack?: import("csstype").BoxPackProperty;
        WebkitScrollSnapPointsX?: string;
        WebkitScrollSnapPointsY?: string;
        alignmentBaseline?: import("csstype").AlignmentBaselineProperty;
        baselineShift?: React.ReactText;
        clipRule?: import("csstype").ClipRuleProperty;
        colorInterpolation?: import("csstype").ColorInterpolationProperty;
        colorRendering?: import("csstype").ColorRenderingProperty;
        dominantBaseline?: import("csstype").DominantBaselineProperty;
        fill?: string;
        fillOpacity?: import("csstype").GlobalsNumber;
        fillRule?: import("csstype").ClipRuleProperty;
        floodColor?: string;
        floodOpacity?: import("csstype").GlobalsNumber;
        glyphOrientationVertical?: React.ReactText;
        lightingColor?: string;
        marker?: string;
        markerEnd?: string;
        markerMid?: string;
        markerStart?: string;
        shapeRendering?: import("csstype").ShapeRenderingProperty;
        stopColor?: string;
        stopOpacity?: import("csstype").GlobalsNumber;
        stroke?: string;
        strokeDasharray?: React.ReactText;
        strokeDashoffset?: React.ReactText;
        strokeLinecap?: import("csstype").StrokeLinecapProperty;
        strokeLinejoin?: import("csstype").StrokeLinejoinProperty;
        strokeMiterlimit?: import("csstype").GlobalsNumber;
        strokeOpacity?: import("csstype").GlobalsNumber;
        strokeWidth?: React.ReactText;
        textAnchor?: import("csstype").TextAnchorProperty;
        vectorEffect?: import("csstype").VectorEffectProperty;
    };
    render(): JSX.Element;
}
