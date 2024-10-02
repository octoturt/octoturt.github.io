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
		"https://www.youtube.com/watch?v=EqEY5WFKcYY"],
	["My coat contained a furnace where there used to be a guy.",
		"https://www.youtube.com/watch?v=EqEY5WFKcYY"],
	["Also plays on 2DS!",
		"https://zaptap.tumblr.com/post/108516213010/konkeydongcountry-new3ds"],
	["Now you're thinking with portals.",
		"https://store.steampowered.com/app/400/Portal/"],
	["So how are you holding up?<br>Because I'm a potato.",
		"https://www.youtube.com/watch?v=vsg-i0Gh2Eg"],
	[":(){:|:& };:",
		"https://en.wikipedia.org/wiki/Fork_bomb"],
	["I confess, I admit, I'm impressed.",
		"https://www.youtube.com/watch?v=3CccPPDe2JU&pp=ygUSdG1iZyBpJ20gaW1wcmVzc2Vk"],
	["Everyone is crying<br>at the dread hypnotic flying<br>of the bee of the bird of the moth.",
		"https://www.youtube.com/watch?v=yiyZmQhuM4w&pp=ygUbYmVlIG9mIHRoZSBiaXJkIG9mIHRoZSBtb3Ro"],
	["We cracked open the skulls of our masters and found nothing but flesh and blood",
		"https://twitter.com/Iinux/status/1472731389405679623"],
	["Press Erase, ignore the shrill alarms.",
		"https://music.youtube.com/watch?v=apHV1CaQWOE&pp=ygUKdG1iZyBlcmFzZQ%3D%3D"],
	["It had been going so well<br>and then I broke my eggshell.",
		"https://www.youtube.com/watch?v=F71gpyuer2Y&pp=ygURdG1iZyBicm9udG9zYXVydXM%3D"],
	["sudo rm -rf --no-preserve-root /",
		"https://en.wikipedia.org/wiki/Rm_(Unix)#Protection_of_the_filesystem_root"],
	["our hard work<br>by these words guarded<br>please dont steal",
		"https://www.rcfp.org/wp-content/uploads/imported/20120105_202426_apple_sealing.pdf"],
	["effective. Power لُلُصّبُلُلصّبُررً ॣ ॣh ॣ ॣ 冗",
		"https://en.wikipedia.org/wiki/SpringBoard#%22effective_power%22_bug"],
	["Life hands you problems<br>Make problemade",
		"https://music.youtube.com/watch?v=E6Yk_tlo3XA"],
	["Protect Trans Kids",
		"https://www.thetrevorproject.org/"],
	["&aelig;&ndash;&Dagger;&aring;&shy;&mdash;&aring;&OElig;&ndash;&atilde;&lsquo;",
		"https://en.wikipedia.org/wiki/Mojibake"],
	["<img style='border-radius: 0px;' src='assets/images/frontpag.gif' >",
		"https://web.archive.org/web/19991013012946id_/http://microsoft.com/frontpage/"],
	["<img style='border-radius: 0px;' src='assets/images/iexplore.gif' alt='Download Internet Explorer Now!'>",
		"https://web.archive.org/web/20020603234352id_/http://www.microsoft.com/downloads/searchdl.asp"]
]

document.onload = setSplash();