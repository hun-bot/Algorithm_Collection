export function validBraces(braces: string): boolean {
  const regex=/\(\)|\[\]|\{\}/g
  while(regex.test(braces)){
      braces=braces.replace(regex,"")
  }
  return !braces.length
}

validBraces("(){}[]")