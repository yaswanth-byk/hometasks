//http://www.codewars.com/kata/get-the-middle-character


function getMiddle(s)
{
  var position;
  var length;
  
  if(s.length % 2 == 1) {
      position = s.length / 2;
      length = 1;
  } 
  else {
      position = s.length / 2 - 1;
      length = 2;
  }
  return s.substring(position, position + length)
}