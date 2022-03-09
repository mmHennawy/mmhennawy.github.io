var my_url="http://www.freedomain.co.nr/"

timegap=500
followspeed=5
followrate=40
suboffset_top=10;
suboffset_left=10;

effect = "fade(duration=0.3);Shadow(color='#777777', Direction=135, Strength=5)"

prop1=[						// prop1 is an array of properties you can have as many property arrays as you need
"808080",					// Off Font Color
"e1e1e1",					// Off Back Color
"808080",					// On Font Color
"eeeeee",					// On Back Color
"bbbbbb",					// Border Color
11,							// Font Size
,					// Font Style 
"bold",					// Font Weight
"Tahoma",	// Font
3,							// Padding
,				// Sub Menu Image
0,							// 3D Border & Separator
,					// 3D High Color
,					// 3D Low Color
,					// Referer item Font Color (leave this blank to disable)
,					// Referer item Back Color (leave this blank to disable)
]

menu1=[				// This is the array that contains your menu properties and details
86,					// Top
149,					// left
93,					// Width
0,					// Border Width
"left",			// Screen Position - here you can use "center;middle;right"
prop1,				// Properties Array - this is set higher up, as above
1,					// Always Visible - allows the menu item to be visible at all time
"center",			// Alignment - sets the menu elements alignment, HTML values are valid here for example: left, right or center
,					// Filter - Text variable for setting transitional effects on menu activation
,					// Follow Scrolling - Tells the menu item to follow the user down the screen
1, 					// Horizontal Menu - Tells the menu to be horizontal instead of top to bottom style
,					// Keep Alive - Keeps the menu visible until the user moves over another menu or clicks elsewhere on the page
,					// Position of sub image left:center:right:middle:top:bottom
,					// Show an image on top menu bars indicating a sub menu exists below
,					// Reserved for future use
"HOME PAGE",my_url+"index.php",,,1,// "Description Text", "URL", "Alternate URL", "Status", "Separator Bar"
"SERVICES","show-menu2",my_url+"signup_basic.php",,1,
"MEMBERS","show-menu3",my_url+"members_basic.php",,1,
"PARTNERS","show-menu4",my_url+"partners.php",,1,
"SUPPORT","show-menu5",my_url+"support.php",,1,
"ABOUT US","show-menu6",my_url+"about.php",,1
]

menu2=[
,,180,1,"",prop1,,"left",effect,,,,,,,
"Free .CO.NR Domain Name",my_url+"basic.php",,,1,
"$8.99/year Domain Names",my_url+"cheapest_domain_names.php",,,1,
"Hosting + Free .COM Domain",my_url+"cheap_web_hosting.php",,,1,
"CO.NR WhoIs Service",my_url+"whois.php",,,1
]

menu3=[
,,170,1,"",prop1,,"left",effect,,,,,,,
"Login : Basic Free Domain",my_url+"members_basic.php",,,1,
"Login : Premium Domains",my_url+"members_premium.php",,,1
]

menu4=[
,,170,1,"",prop1,,"left",effect,,,,,,,
"Link Exchange",my_url+"add_link.php",,,1,
"About Partnership",my_url+"partners.php",,,1,
"Our Partners",my_url+"links.php",,,1,
"Advertising",my_url+"advertise.php",,,1
]

menu5=[,,170,1,,prop1,0,"left",effect,0,,,,,,
"Community Forums","http://www.forums.co.nr",,,1,
"Basic Domain FAQ",my_url+"faq_basic.php",,,1,
"Premium Domain FAQ",my_url+"faq_premium.php",,,1
//* "Free Hosting FAQ",my_url+"faq_freehosting.php",,,1
]

menu6=[
,,140,1,"",prop1,,"",effect,,,,,,,
"Latest News", my_url+"news.php",,,1,
"About Us", my_url+"about.php",,,1,
"Contact Us", my_url+"contact.php",,,1,
"Link to Us", my_url+"linktous.php",,,1
]

