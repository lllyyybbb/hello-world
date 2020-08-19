document.addEventListener("DOMContentLoaded", function() {
  const body = document.querySelector("body");

  //If we're on the submit page, which we detect with different body classes, initialize the different components
  //Intrisssssting. But where is the body class defined...on the submit.html page? OH nvrmind I see! You define 
  //the body class in the html....found it!
  if (body.classList.contains("submit-page")) {
    var quill = new Quill("#editor", {
      theme: "snow"
    });
    const submit = document.querySelector(".submit");
    //Here is where the script for the form begins
    submit.addEventListener("click", function() {
      console.log("submit button clicked");
      var delta = quill.getContents();
      console.log(delta);
    });
  }

  const butt = document.getElementById("button");
  const up = document.getElementById("up");
  const down = document.getElementById("down");

  const arr = [
    `<i>Turn the paper over and start again (or, start a new document)</i>:<br> Rewrite it\
                in lines or a freewrite, <br> but cover the same experience, event, or idea. <br>\
                Feel free to change add to, or go in a different direction from the original.`,

    `Change the way the poem looks on the page and you can't but help change <br>\
                 some language as well. You might alter line length, <br> stanza breaks, flush-left margins, poem length\
                 punctuations, capitals, etc.`,

    `Take the last line of the poem and make it the first line.<br><br>\
                 Using this as the new starting point,<br>\           
re-write the poem from memory, without looking at the original.`,

    `this is another example`,

    `Early in 1990, on the edge of Yellowstone National 
Park in Paradise Valley, Montana, construction was afoot 
on a state-of-the-art $25 million nuclear bunker facility 
under the 32 thousand-acre Royal Teton Ranch owned by the 
Church Universal and Triumphant (CUT). The church’s leader, 
the charismatic Elizabeth Clare Prophet or “Guru Ma,” 
believed that nuclear Armageddon was imminent—and therefore 
that the construction of bunkers in her community was not 
only prudent, but necessary and urgent.
According to Guru Ma’s son Sean, 
who managed its construction, 
the CUT bunker network comprised six distinct clusters 
made from stitched-together corrugated iron oil tanks 
salvaged from service. These tanks were buried in massive open 
pits, then covered in topsoil by heavy equipment. 
In each tank a kitchen, an infirmary, and laundry facilities were built. 
The largest tanks, a pair of 40-foot-wide, 325-foot-long arches, 
were connected by a central passageway to form a large H shape.
Supposedly, there was space in the bunkers for 750 church staff 
members and leaders. For congregants, though, a place in them 
came at a cost. One devotee, who had withdrawn her life savings, 
paid $6,000 for space in a bunker with 125 other people and seven 
months’ worth of food. Others, for the bargain price of $200,000, 
had bought into specially designed survival condominiums in the underground community.`
  ];

  butt.addEventListener("click", function() {
    console.log("WE CLICKED THE BUTTON");

    document.querySelector(".promptbox").innerHTML =
      arr[Math.floor(Math.random() * arr.length)];
  });

  up.innerHTML = "Click on the button to receive a prompt";
});
