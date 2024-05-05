

const Button = ({color, text, cn, fun, num, oU}) => {
    return <button 
    onClick= {() => fun(num, oU)}
    style={{ backgroundColor: color }}
    className={cn}
    >
         {text} 
         </button>
}

export default Button
