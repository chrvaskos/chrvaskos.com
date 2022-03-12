export const sortByDate = (a: any, b: any): number => {
  return (
    new Date(b.frontMatter.date).valueOf() -
    new Date(a.frontMatter.date).valueOf()
  )
}

export const calcPercent = () => {
  let h = document.documentElement,
    b = document.body,
    st = 'scrollTop',
    sh = 'scrollHeight'
  // @ts-ignore: Element implicitly has an 'any' type because expression of type 'string' can't be used to index type 'HTMLElement'. No index signature with a parameter of type 'string' was found on type 'HTMLElement'.
  return ((h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight)) * 100
}
