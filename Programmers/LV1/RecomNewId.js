function solution(new_id) {
  new_id=new_id.toLowerCase()
  new_id=new_id.replaceAll(/[^\w\.\-]/g,'')
  new_id=new_id.replaceAll(/[\.]{2,}/g,'.')
  new_id = new_id.replace(/^\.|\.$/, '');
  if(new_id.length===0) new_id+='a'
  if(new_id.length>=16) new_id=new_id.substring(0,15)
  new_id=new_id.replace(/\.$/,'')
  if(new_id.length<=2) new_id = new_id + new_id[new_id.length - 1].repeat(3 - new_id.length);

  return new_id
}