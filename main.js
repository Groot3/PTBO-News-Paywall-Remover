const paywall = document.getElementsByClassName("basic-paywall-new")
const textcontainer = document.getElementsByClassName("text-block-container")

async function main () {
    await new Promise(resolve => setTimeout(resolve, 3000))
    // Paywall loads after content on the page, wait 3 seconds before modifying html

    for (i = 0; i < textcontainer.length; i++) {
        if (textcontainer[i].style.display == "none") {
            textcontainer[i].style.display = ""
            //unhides content
        }
    }

    while (paywall) {
        paywall[0].remove()
    }
}
main()