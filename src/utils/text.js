export function firstWordStyle(text){
    return text.trim().split(" ").map((item, index) => {
        item = item + " "
        if (index === 0) return <span
            key={index}
            className="heading__first">
            {item}
        </span>
        return item  
    })
}


