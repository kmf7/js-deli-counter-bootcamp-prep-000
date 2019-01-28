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
  let i=0;
  while(i<line.length){
    line[i]= i+1 + '. ' + line[i];}
     return line; 
  if( line.length>0){
    return `The line is currently: ${line}`;
  }
  else{
    return "The line is currently empty.";
   }
}