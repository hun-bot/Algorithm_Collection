function solution(id_list, report, k) {
  let reported=[...new Set(report)].map((i)=>i.split(' '))
  let map=new Map()
  for ([, report] of reported) {
    map.set(report, map.get(report) + 1 || 1)
  }
  console.log(map,reported);
}


solution(["muzi", "frodo", "apeach", "neo"],["muzi frodo","apeach frodo","frodo neo","muzi neo","apeach muzi"],2)