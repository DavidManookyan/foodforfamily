const Button = {
    // The styles all button have in common
    baseStyle: {
        py: "0",
        minHeight: "53px",
        borderRadius: "50px",
        fontWeight: "bold",
        textTransform: "uppercase",
        fontSize: "15px",
        _focus: {
            boxShadow: "none",
        }
    },
    variants: {
        black: {
            backgroundColor: 'black.100',
            color: 'white.100',
        },
        blue: {
            backgroundColor: 'blue.100',
            color: 'white.100',
        },
        transparent: {
            backgroundColor: 'transparent',
            color: 'black.100',
            border: "2px solid",
            borderColor: "black.100",
        },
    },
    // The default size and variant values
    defaultProps: {
        size: "md",
        variant: "transparent",
    },
}

export default Button
