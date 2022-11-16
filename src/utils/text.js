export function firstWordStyle(text, n) {
  return text
    .trim()
    .split(" ")
    .map((item, index) => {
      item = item + " ";
      if (index < n)
        return (
          <span key={index} className="heading__first">
            {item}
          </span>
        );
      return item;
    });
}
