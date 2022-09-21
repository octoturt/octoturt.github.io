const splashText = document.getElementsByClassName("splash");

function setSplash() {
  const splash = allSplashes[Math.floor(Math.random() * allSplashes.length)];
  splashText[0].innerHTML = splash[0];
  splashText[0].href = splash[1];
}

function chooseSplash(splashIndex) {
  splashText[0].innerHTML = allSplashes[splashIndex][0];
  splashText[0].href = allSplashes[splashIndex][1];
}

const allSplashes = [
  ["10,700 days we've been accident free!",
    "https://www.youtube.com/watch?v=8WA4NDa1xmU"],
  ["Dance like they're watching you.<br>Because they are watching you.",
    "https://www.youtube.com/watch?v=VyugfHPOFBE"],
  ["This was a triumph.",
    "https://www.youtube.com/watch?v=Y6ljFaKRTrI"],
  ["Look on my works, ye Mighty, and despair!",
    "https://en.wikipedia.org/wiki/Ozymandias#Text"],
  ["The truth is where the sculptor's chisel chipped away the lie. ",
    ""],
  ["My coat contained a furnace where there used to be a guy.",
    ""],
  ["Also plays on 2DS!",
    ""],
  ["Now you're thinking with portals.",
    ""],
  ["So how are you holding up?<br>Because I'm a potato.",
    ""],
  [":(){:|:& };:","https://en.wikipedia.org/wiki/Fork_bomb"],
  ["I confess, I admit, I'm impressed.",
    ""],
  ["Everyone is crying<br>at the dread hypnotic flying<br>of the bee of the bird of the moth.",
    ""],
  ["We cracked open the skulls of our masters and found nothing but flesh and blood",
    "https://twitter.com/Iinux/status/1472731389405679623"],
  ["Press Erase, ignore the shrill alarms.",
    ""],
  ["It had been going so well<br>and then I broke my eggshell.",
    ""],
  ["sudo rm -rf --no-preserve-root /",
    "https://en.wikipedia.org/wiki/Rm_(Unix)#Protection_of_the_filesystem_root"],
  ["our hard work<br>by these words guarded<br>please dont steal",
    "https://www.rcfp.org/wp-content/uploads/imported/20120105_202426_apple_sealing.pdf"]
]

document.onload = setSplash();