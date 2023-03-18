function rgb(r, g, b){
  function rgb(r, g, b){
    const toHex=(num)=>{
      if(num<0) return "00"
      if(num>255) return "FF"
      return ("0"+(Number(num).toString(16))).slice(-2).toUpperCase()
    }
      return toHex(r)+toHex(g)+toHex(b)
  }
}

rgb(255,255,255)