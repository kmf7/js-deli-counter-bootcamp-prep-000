function takeANumber(line, name){
 let n= line.length+1;
 line.push(name);
    return `Welcome, ${name}. You are number ${n} in line.`;
}
function nowServing(line){
  if (line.length===0){
    return "There is nobody waiting to be served!";
  }
  else{
    return `Currently serving ${line.shift()}.`;
  }
}
function currentLine(line){
  let names= [];
  if (line>0){
    
  }
}
  