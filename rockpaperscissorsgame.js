<html>
<head></head>
<body>
<script>
var rps;
while (rps !== "r" || rps!== "p" || rps !== "s"){
  prompt("rock, paper, or scissors?");
}
var rpsThrow = Math.floor(Math.random() * 3);

if (rpsThrow === 0) {
  rpsThrow = "r";
} else if (rpsThrow === 1) {
  rpsThrow = "p";
} else {
  rpsThrow = "s";
}

console.log("You threw " + rps + ". I threw " + rpsThrow + ".");
if (rpsThrow === rps) {
  console.log("TIE!");
} else if ((rps === "r" && rpsThrow === "s") || (rps === "p" && rpsThrow === "r") || (rps = "s" && rpsThrow === "p")){
  console.log("You cheated! Play again");
} else {
  console.log("You lose!");
}

</script>
</body>
</html>
