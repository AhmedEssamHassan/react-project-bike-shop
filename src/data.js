import React, { Component } from "react";
export const catigoriesTitles = [
  {
    name: "adults",
    id: 1,
    picture: "./video-and-img/racing.jpg",
    icon: <i className="fa fa-bicycle" aria-hidden="true"></i>,
    path: "/race",
  },
  {
    name: "children",
    id: 2,
    picture: "./video-and-img/children.jpg",
    icon: <i className="fa fa-child" aria-hidden="true"></i>,
    path: "/children",
  },
  {
    name: "clothes",
    id: 4,
    picture: "./video-and-img/clothes.jpg",
    icon: <i className="fa fa-shopping-basket" aria-hidden="true"></i>,
    path: "/clothes",
  },
  {
    name: "accesories",
    id: 5,
    picture: "./video-and-img/accesories.jpg",
    icon: <i className="fa fa-cogs" aria-hidden="true"></i>,
    path: "/accesories",
  },
  {
    name: "Electric",
    id: 6,
    picture: "./video-and-img/motor.jpg",
    icon: <i className="fa fa-motorcycle" aria-hidden="true"></i>,
    path: "/motor",
  },
  {
    name: "tools",
    id: 7,
    picture: "./video-and-img/tools.jpg",
    icon: <i className="fa fa-wrench" aria-hidden="true"></i>,
    path: "/tools",
  },
];

export const addressesTitle = [
  {
    id: 1,
    branch: "Nasr City, Cairo",
    map: (
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13817.368411686322!2d31.4205552!3d30.0270418!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583cfd5e540799%3A0x4a397398c27f4413!2z2YPYp9mK2LHZiCDZgdiz2KrZitmB2KfZhCDYs9mK2KrZitiMINmF2K_ZitmG2Kkg2YbYtdix2Iwg2YXYrdin2YHYuNipINin2YTZgtin2YfYsdip4oCs!5e0!3m2!1sar!2seg!4v1602188967832!5m2!1sar!2seg"
        width="600"
        height="450"
        frameBorder="0"
        allowFullScreen=""
        aria-hidden="false"
        tabIndex="0"
      ></iframe>
    ),
  },
  {
    id: 2,
    branch: "Tanta City",
    map: (
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54837.43396017079!2d31.03437621962798!3d30.793108825528417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f7c970776b3403%3A0x7871bcfbf74b23a8!2z2LfZhti32KcgKNmC2LPZhSAyKdiMINi32YbYt9in2Iwg2KfZhNi62LHYqNmK2Kk!5e0!3m2!1sar!2seg!4v1602189207175!5m2!1sar!2seg"
        width="600"
        height="450"
        frameBorder="0"
        allowFullScreen=""
        aria-hidden="false"
        tabIndex="0"
      ></iframe>
    ),
  },
  {
    id: 3,
    branch: "Mansoura City, Cairo",
    map: (
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54695.26601842818!2d31.41785931792771!3d31.041454962476536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f79db7a9053547%3A0xf8dab3bbed766c97!2z2KfZhNmF2YbYtdmI2LHYqdiMINin2YTZhdmG2LXZiNix2KkgKNmC2LPZhSAyKdiMINin2YTZhdmG2LXZiNix2KnYjCDYp9mE2K_ZgtmH2YTZitip!5e0!3m2!1sar!2seg!4v1602189274120!5m2!1sar!2seg"
        width="600"
        height="450"
        frameBorder="0"
        allowFullScreen=""
        aria-hidden="false"
        tabIndex="0"
      ></iframe>
    ),
  },
  {
    id: 4,
    branch: "Alexandria",
    map: (
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13650.112934489847!2d29.890353776821648!3d31.206091606634146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f5c3fd55e6fdc3%3A0xdc954420d1ddd6b0!2z2LHYp9izINin2YTYqtmK2YbYjCDYp9mE2LPZitin2YTYqSDYtNix2YLYjCDZgtiz2YUg2KfZhNis2YXYsdmD2Iwg2KfZhNil2LPZg9mG2K_YsdmK2Kk!5e0!3m2!1sar!2seg!4v1602189359021!5m2!1sar!2seg"
        width="600"
        height="450"
        frameBorder="0"
        allowFullScreen=""
        aria-hidden="false"
        tabIndex="0"
      ></iframe>
    ),
  },
];

export const adultsComponent = [
  {
    id: 1,
    type: "race bike",
    img: "./video-and-img/adults-Race.jpg",
    price: 2349.0,
    desc: `Lightweight, no fuss, stripped down. These bikes are designed to go fast so expect a 
    low front end for an aerodynamic position (shorter head tube, flat stem, low handlebars)
    Emphasis on speed than comfort. Expect a stiffer frame and super responsive handling.
    Gearing tends to be higher for more speed. Wheels are either skinny lightweight models or
     carbon aero versions.
    Finishing kit is all about efficiency as well so tends to be lighter with a nod to aero
     benefits to save rider energy as well as overall bike weight.
    Buy  a race bike if you want light weight, no loss of power, a lively ride and you want 
    to go fast all the time.`,
    goodFor: "going fast, racing, speed thrills.",
    notGoodFor: "touring, long rides in steep terrain, inflexible bodies.",
  },
  {
    id: 2,
    type: "Gravel bike",
    img: "./video-and-img/adults-gravel.jpg",
    price: 1599.0,
    desc: `One for the more recent developments in road bike genres is gravel bikes. Gravel bikes
     can tackle off road terrain such as tracks and trails whilst still retaining the ability to
      cover long rides relatively quickly. On first sight a gravel bike looks similar to a cyclocross 
      bike, however the geometry of a gravel bike is more designed for comfort, rather than the more
       aggresive geometry of a cyclocross bike.
    Gravel bikes combine the some of the comfort aspects of a sportive bike with some of the off road
     capabilities of a cyclo cross bike. The result is a bike which is comfy enough to be ridden all day
      and tackle all but the most extreme terrain, where mountain bikes still rule.
    Most gravel bikes feature disc brakes and a strong well built frame which can handle the additional 
    knocks and challenges these bikes are designed for. Larger clearances at the fork and rear stays allow
     for wider, more knobblier tyres and the debris which they can collect.
    Entry – Mid range gravel bikes tend to feature an aluminium frame combined with a carbon fibre front
     fork. Higher specced gravel bikes feature a carbon fibre frame and fork. Regardless of their construction
      material, gravel frames tend to be built more solidly than regular road bike frames.
    The drawback to all this extra in-built flexibility is a slight reduction in speed, however this 
    can be marginal and a price worth paying for a ‘go anywhere bike’.`,
    goodFor: "Venturing off road, general riding.",
    notGoodFor: " High end road performance / Speed.",
  },
  {
    id: 3,
    type: "Sportive / Endurance bike",
    img: "./video-and-img/adults-Sportive .jpg",
    price: 3559.0,
    desc: `Sportives are long-distance mass participation cycling challenge events where the emphasis is
     on endurance rather than speed.
    Sportive / Endurance bikes offer a lot of the lightweight benefits of a traditional race bike but 
    with one crucial point in mind – comfort.
    The riding position is more upright offering greater all-day comfort at the expense of aerodynamic 
    efficiency.
    The geometry of the frame is also tweaked to offer comfort and more stable/steadier handling over
     longer distances.
    The material make-up of Sportive bikes tends to be different from pure race models. The tubes are
     designed to ‘give’ a little bit. Less stiff, more comfy.
    Gearing is lower to help cope with big hills without the need for speed. Wheels are still lightweight
     but more robust and with little in terms of aerodynamic properties.
    Disc brakes and larger clearances (for wider tyrers )are also becoming more popular in this type of 
    bike.
    Finishing kit is more about comfort but again still light enough to not affect overall weight.
    In short, a sportive / endurance bike is a more comfortable race bike. Consider one if head down all out 
    speed and super light weight isn’t a priority but comfort on longer rides is.`,
    goodFor: "long distances / hilly terrain.",
    notGoodFor: "racing or short blast adrenaline rides.",
  },
  {
    id: 4,
    type: "Aero bike",
    img: "./video-and-img/adults-Aero.jpg",
    price: 2425.0,
    desc: `Aero road bikes take many of the aerodynamic features of a time trial (TT) bike and put them into
     a more of a regular road race frame.
    This does tend to add a bit of weight compared to a race frame but the aero advantages can help save time
     on certain courses.
    Most of these types of frame are carbon with the same geometry and material lay up as a race frame so expect
     a low and fast position. Cables tend to be hidden out of the air – running internally through the inside of the frame.
    These bikes are ideal on longer flatter courses. Coupled with a set of deep section wheels they can offer
     impressive time savings.
    The gearing is similar to race bikes ie. high for more speed and finishing kit is lightweight also.
    Buy if you want an aerodynamically focussed race bike.`,
    goodFor: "slicing through wind drag at mid- to high-end speeds.",
    notGoodFor: "slower, relaxed rides.",
  },
  {
    id: 5,
    type: "Commuter bike",
    img: "./video-and-img/adults-Commuter.jpg",
    price: 1199.95,
    desc: `The real workhorses of the bike world. Built with comfort and durability in mind as they will take a bashing day after day in all weathers.
    Weight isn’t such an issue. Frame geometry offers a more upright position for greater comfort and in-traffic vision.
    Frames have fittings for proper mudguards and racks to keep you dry and so you don’t have to carry any weight on your back.
    Wheels are all about strength and longevity and coupled with sturdy tyres offer greater impact protection and increased comfort; just don’t expect supple handling or low weight.
    Disc brakes are also popular as they offer hassle free stopping and the lack of rim brakes rub means slight wheel buckles are less of a problem.
    Bars can be either drop or flat depending on your preference.`,
    goodFor: "day-in day-out reliability and comfort.",
    notGoodFor: "bike-handling thrills and flat-out speed.",
  },
  {
    id: 6,
    type: "touring bike",
    img: "./video-and-img/adults-touring.jpg",
    price: 999.95,
    desc: `Touring bikes are built for comfort over long distances carrying heavy loads (such as clothing or camping stuff)
    “Overbuilt” is a good description as the frame and components are built to last. Despite the weight they are very comfortable.
    At first the gearing may seem unbelievably low when unladen but get some panniers on there and you’ll appreciate it.
    The frame geometry is long and relatively upright for greater comfort and easier handling, again crucial when out on long rides with a heavy load.
    Wheels are super tough, with more spokes than other road bikes. The rims are bombproof to cope with the loads and surfaces.
    Disc brakes are becoming more and more popular as they offer better braking in all conditions especially when carrying heavy loads.
    Components are strong and long lasting with more emphasis on comfort due to long periods riding.
    If you are planning on carrying any kind of load in your pannier a long distance and heading off for a few days, get a touring bike.`,
    goodFor: " touring, funnily enough!",
    notGoodFor: "racing or any speed-work.",
  },
];

export const childrenComponent = [
  {
    id: 1,
    type: "Frog 62 Kids Bike",
    img: "./video-and-img/kids1.jpg",
    price: 365.0,
    descTitle: "Frog MTB 62 Kids Bike (8-10 Years Old)",
    desc: `This 24" wheel junior mountain bike is the ideal multi terrain bicycle for off-road cycling and suitable for 8-10 year olds with a minimum inside leg measure of 62cm. Supplied with super grippy Kenda tyres making sure you have grip in muddy conditions. Finshed off with the brilliant Shiamno 9 Speed rapid fire gears that are opperated by the super easy thumb shifter helping to go up and down the gear for hours of fun.`,
  },
  {
    id: 2,
    type: "Frog 55 Kids Bike",
    img: "./video-and-img/kids3.jpg",
    price: 355.0,
    descTitle: "Frog 52 Kids Bike For 5-6 years",
    desc: `The Frog 52s hi-quality lightweight frame and forks, make this kid’s bike tough enough for wild cycling adventures in the woods! The Tektro brakes with adjustable levers designed for kid’s hands and the brilliant 8-speed Shimano easy-twist gears and easily adjusted saddle height.  `,
  },
  {
    id: 3,
    type: "Frog 44 Kids Bike",
    img: "./video-and-img/kids2.jpg",
    price: 300.0,
    descTitle: "Frog 44 Kids Bike",
    desc: `The Frog 44 is the first new and improved kids biks in the Frog range. It is the perfect bike for 4 to 5 year olds with an average inside leg of 44cm. Frog have managed to save weight of this model by using smaller tube diameters with thinner walls. The Frog 44 weighs only 6.39kg. Along with this weight saving, Frog have lowered the bottom bracket to achieve a more ergonomic position on the bike.`,
  },
  {
    id: 4,
    type: "Frog 73 Kids Bike",
    img: "./video-and-img/kids6.jpg",
    price: 400.0,
    descTitle: "Frog 73 Team Sky Kids Bike For 12-14 Years",
    desc: `Inspiring tomorrows cycling heroes the Frog 73 featuring an all-aluminium frame provides a stable, versatile bike for kids. The hybrid design of the bike means this bike is great for family rides to the park and in the park as it’s suitable for on and off road use. The Tektro brakes with adjustable levers designed for kid’s hands and the brilliant 8-speed Shimano easy-change thumb shifters and easily adjusted saddle height.  `,
  },
  {
    id: 5,
    type: "Frog 69 Kids Bike",
    img: "./video-and-img/kids5.jpg",
    price: 660.0,
    descTitle: "Frog MTB 69 Kids Bike (10-12 Years Old)",
    desc: `This 26" wheel junior mountain bike is the ideal multi terrain bicycle for off-road cycling and suitable for 10-12 year olds with a minimum inside leg measure of 69cm. Supplied with super grippy Kenda tyres making sure you have grip in muddy conditions. Finshed off with the brilliant Shiamno 9 Speed rapid fire gears that are opperated by the super easy thumb shifter helping to go up and down the gear for hours of fun.`,
  },
  {
    id: 6,
    type: "Frog MTB 62 Kids Bike",
    img: "./video-and-img/kids4.jpg",
    price: 650.0,
    descTitle: "Frog 78 Kids Bike (13+ Years Old)",
    desc: `This 26" wheel junior hybrid bike is a great multi-purpose bike suitable for juniors aged 13+ years old with a minimum inside leg of 78cm. Finshed off with the brilliant Shiamno 8 Speed gears that are opperated by the super easy thumb shifter.`,
  },
  {
    id: 7,
    type: "Frog 62 Kids Bike",
    img: "./video-and-img/kids10.jpg",
    price: 650.0,
    descTitle: "Frog MTB 72 Kids Bike",
    desc: `This 26" wheel junior mountain bike is the ideal multi terrain bicycle for off-road cycling and suitable for 13+ year olds with a minimum inside leg measure of 72cm. Supplied with super grippy Kenda tyres making sure you have grip in muddy conditions. Finshed off with the brilliant Shiamno 9 Speed rapid fire gears that are opperated by the super easy thumb shifter helping to go up and down the gear for hours of fun.`,
  },
  {
    id: 8,
    type: "Frog 40 Kids Bike",
    img: "./video-and-img/kids8.jpg",
    price: 290.0,
    descTitle: "Frog 40 Kids Bike For 3-4 years",
    desc: `The first pedal lightweight Frog 40 is best suited to children aged 3-4 years old with an average inside leg measurement of 40cm. This bike is a great confidence booster and can be used as a balance bike for taller child by removing the pedals. With Child freindly components such as easy reach brake levers for smaller hands and shorterned cranks to make those first pedals easyier. `,
  },
  {
    id: 9,
    type: "Frog 78 Kids Bike",
    img: "./video-and-img/kids7.jpg",
    price: 420.0,
    descTitle: "Frog 69 Kids Bike For 10 -12 Years",
    desc: `Inspiring tomorrows cycling heroes the Frog 69 featuring an all-aluminium frame provides a stable, versatile bike for kids. The hybrid design of the bike means this bike is great for family rides to the park and in the park as it’s suitable for on and off road use. The Tektro brakes with adjustable levers designed for kid’s hands and the brilliant 8-speed Shimano easy-change thumb shifters and easily adjusted saddle height.`,
  },
];

export const accessoriesComponent = [
  {
    name: "Bells & Horns",
    id: 1,
    picture: "./video-and-img/accessories-bells.jpg",
    icon: <i className="fa fa-shopping-basket" aria-hidden="true"></i>,
    path: "/bells",
  },
  {
    name: "Bicycle Mirrors",
    id: 2,
    picture: "./video-and-img/accessories-mirror.jpg",
    icon: <i className="fa fa-shopping-basket" aria-hidden="true"></i>,
    path: "/mirrors",
  },
  {
    name: "Bicycle Lighting",
    id: 3,
    picture: "./video-and-img/accessories-light.jpg",
    icon: <i className="fa fa-shopping-basket" aria-hidden="true"></i>,
    path: "/lighting",
  },
  {
    name: "Locks & Security",
    id: 4,
    picture: "./video-and-img/accessories-locks.jpg",
    icon: <i className="fa fa-shopping-basket" aria-hidden="true"></i>,
    path: "/locks",
  },
  {
    name: "Mudguards",
    id: 5,
    picture: "./video-and-img/accessories_mudguards.jpg",
    icon: <i className="fa fa-shopping-basket" aria-hidden="true"></i>,
    path: "/mudguards",
  },
  {
    name: "Gear Hangers",
    id: 6,
    picture: "./video-and-img/accessories_gear_hangers.jpg",
    icon: <i className="fa fa-shopping-basket" aria-hidden="true"></i>,
    path: "/Gear",
  },
];

export const bellsComponent = [
  {
    id: 1,
    type: "Knog Oi Classic Bell",
    img: "./video-and-img/bells1.jpg",
    price: 13.0,
    descTitle: "Knog Oi Classic Bell",
    desc: `Bike bells generally look & sound a bit ugly. But why? What if they looked sexy & sounded like an angel playing a glockenspiel. The bells fit on almost all cylindrical bars. The Large Oi is for all bar sizes up to 31.8mm. The Oi will also work on any aero bar with a 16mm cylindrical section (usually near the stem).`,
  },
  {
    id: 2,
    type: "Hornit DB140 Cycle Horn",
    img: "./video-and-img/bells2.jpg",
    price: 14.99,
    descTitle: "Hornit DB140 Cycle Horn",
    desc: `At 140dB it's equivalent to a jet engine and 4 x louder than the competition. Now cyclists can actively alert lorries, buses, cars and pedestrians to their presence (rather than hoping to be seen) which makes cycling safer.`,
  },
  {
    id: 3,
    type: "Knog Oi Luxe Bell",
    img: "./video-and-img/bells3.jpg",
    price: 26.95,
    descTitle: "Knog Oi Luxe Bell",
    desc: `The new Oi Luxe is luxe in every sense of the word. It's CNC machined ringer and brass dinger, stitched 'vegan' leather shim and metal injection moulded stainless steel, make it a pleasure to have on your handlebars. Where bells usually protrude up or out, Oi Luxe doesn’t. It appears to hover around the handle bars. In one sense, it's discreet. But in another, it stands out as unrecognisable. Through various prototypes to get the perfect pitch, length of ring, and volume, Knog ended up with the Oi Luxe. With a CNC-machined brass dinger, the strike of the bell is firm and fast, allowing a good balance of volume and longevity of sound.`,
  },
  {
    id: 4,
    type: "BBB BBB-11 Loud&Clear Bell Black",
    img: "./video-and-img/bells4.jpg",
    price: 2.99,
    descTitle: "BBB BBB-11 Loud&Clear Bell Black",
    desc: `Unique spring system makes this bell exceptionally loud,
 

    Durable and lightweight construction,
     
    
    Standard clamping mechanism and
     
    
    Colours: black.`,
  },
  {
    id: 5,
    type: "Force Adjustable Bell",
    img: "./video-and-img/bells5.jpg",
    price: 2.99,
    descTitle: "Force Adjustable Bell",
    desc: `Clamp range: 22.2mm - 31.8mm (with rubber inserts),
    Diameter of the bell: 31mm,
    Material: Steel/ plastic and
    Weight: 19g`,
  },
  {
    id: 6,
    type: "Hornit Mini Hornit Kids Bike Light and Horn",
    img: "./video-and-img/bells6.jpg",
    price: 11.99,
    descTitle: "Hornit Mini Hornit Kids Bike Light and Horn",
    desc: `The ultimate lights and sound effects toy for kids' bikes and scooters. 12 lumen bike lights and 25 fun sound effects help to keep your child safe.`,
  },
  {
    id: 7,
    type: "Lezyne Classic Bell",
    img: "./video-and-img/bells7.jpg",
    price: 11.7,
    descTitle: "Lezyne Classic Bell",
    desc: `Compact, classic shape,
    Modern, high quality materials,
    High-polished brass,
    Machined aluminium base and
    Brass striker.`,
  },
  {
    id: 8,
    type: "BBB-14 Easy Fit Deluxe Bell",
    img: "./video-and-img/bells8.jpg",
    price: 5.5,
    descTitle: "BBB-14 Easy Fit Deluxe Bell",
    desc: `Lightweight bicycle bell with extra loud brass top and stainless steel spring,
    Can be mounted in various positions,
    Quick-release strap fits all diameters and
    Easy to install and remove.`,
  },
  {
    id: 9,
    type: "Lezyne Classic HM Bell",
    img: "./video-and-img/bells9.jpg",
    price: 22.0,
    descTitle: "Lezyne Classic HM Bell",
    desc: `Hard Mount,  
    Compact, classic shape, 
    Modern, high quality materials, 
    High-polished brass, 
    Machined aluminium base and 
    Brass striker.`,
  },
];

export const locksComponent = [
  {
    id: 1,
    type: "Abus Ultimate 420 & Cable D Bike Lock",
    img: "./video-and-img/lock1.jpg",
    price: 40.0,
    descTitle: "Abus Ultimate 420 & Cable D Bike Lock",
    desc: `There are locks and there is the Ultimate 420. If you are looking for a shackle lock that will deter potential thieves just by looking at it, then you don't have to look far. 13mm thick hardened special steel and aggressive colouring make it immediately clear to any bicycle thief that he has no chance here.
 
    At the same time, the Ultimate 420 is so compact that you can easily stow it away. It finds its place in every backpack and bag and is therefore always with you when you need to secure your valuable bicycle.`,
  },
  {
    id: 2,
    type: "Hiplok Z-Lok Single Combo Armoured Reusable Tie Lock",
    img: "./video-and-img/lock2.jpg",
    price: 14.5,
    descTitle: "Hiplok Z-Lok Single Combo Armoured Reusable Tie Lock",
    desc: `The  Z-LOK COMBO is a multi-use combination lock featuring a toughened nylon outer, allowing the Z-LOK to be both secure and lightweight. Hiplok’s lock + hold design allows for full adjustability along its locking diameter. The Z-Lok Combo Armoured Reuseable Lock provides ultra-convenient added protection for use on car racks, with accessories and other outdoor equipment. Hiplok’s double ratchet design combined with a steel core and springs allows the z lok to be both secure and lightweight.
    `,
  },
  {
    id: 3,
    type: "Hiplok DX D Lock",
    img: "./video-and-img/lock3.jpg",
    price: 52.0,
    descTitle: "Hiplok DX D Lock",
    desc: `The ultimate D lock design built to the strongest standard with anti-rotation, double locking tabs and 14mm steel shackle. One of the lightest Sold Secure Gold rated D-locks on the market features Hiplok’s unique CLIP + RIDE system so that it can be easily carried on bag straps and belts – no bracket required.`,
  },
  {
    id: 4,
    type: "Abus Ultra 410 D Bike Lock",
    img: "./video-and-img/lock4.jpg",
    price: 26.99,
    descTitle: "Abus Ultra 410 D Bike Lock",
    desc: `Featuring a simple, strong and attractive design, the new Ultra 410 is the ideal entry level D-lock and complements the Super Ultimate and Ultimate line-up. Its simple design conceals a number of high-tech advancements in security including a new double layered key with decoy cuttings and a cylinder with special wafers, which make this lock virtually impossible to pick with conventional methods. Every variant is Sold Secure Silver certified.
    The 12mm thick double bolted, hardened steel shackle extends all the way through the lock body providing excellent protection against cutting and torsion attacks in a simple yet innovative design.`,
  },
  {
    id: 5,
    type: "Hiplok Z-Lok Armoured Reuseable Tie Lock - Single",
    img: "./video-and-img/lock5.jpg",
    price: 7.25,
    descTitle: "Hiplok Z-Lok Armoured Reuseable Tie Lock - Single",
    desc: `The first secured reusable security tie provides ultra-convenient added protection for use on car racks, with accessories and other outdoor equipment. Hiplok’s double ratchet design combined with a steel core and springs allows the Z LOK to be both secure and lightweight.`,
  },
  {
    id: 6,
    type: "Abus Granit XPlus 540 Lock",
    img: "./video-and-img/lock6.jpg",
    price: 74.99,
    descTitle: "Abus Granit XPlus 540 Lock",
    desc: `The highest level of security from the Abus lock range. The Granit XPlus™ 540 offers the best protection against theft for your beloved bike. Specially hardened steel, power cell technology for protection against impact and attempts to force open the lock, XPlus cylinder for the greatest protection against tampering. Secuitry Level 15, Gold Secure.`,
  },
  {
    id: 7,
    type: "Hiplok Z-Lok Armoured Reuseable Tie Lock - Pair",
    img: "./video-and-img/lock7.jpg",
    price: 13.0,
    descTitle: "Hiplok Z-Lok Armoured Reuseable Tie Lock - Pair",
    desc: `The first secured reusable zip style tie provides ultra-convenient added protection for use on car racks, with accessories and other outdoor equipment. A cutting edge concept in security with a multitude of applications, Z LOK is sold in pairs. Ideal for those much needed Cafe stops!`,
  },
  {
    id: 8,
    type: "Abus Bordo 6500 Granit X-Plus Lock",
    img: "./video-and-img/lock8.jpg",
    price: 92.99,
    descTitle: "Abus Bordo 6500 Granit X-Plus Lock",
    desc: `The range-topping Bordo 6500 folding lock, part of the Granit X-Plus range, features the ABUS X-Plus cylinder for maximum picking protection and greater ease of use. The lock is manufactured with 5.5mm hardened steel links so it will resist the most brutal attacks. At 85cm long, its concertina-style construction offers a multitude of fixing possibilities to lamp posts or other fixed objects. 
 
    Comes complete with sleek rubberised pouch with Velcro strap to allow attaching to anywhere on your frame. Supplied with 2 keys (one with integrated LED) and a key code card for cutting additional or replacement keys. The Bordo Granit 6500 X-Plus is Sold Secure Gold approved.`,
  },
  {
    id: 9,
    type: "Hiplok Airlok Wall Mounted Lock / Hanger",
    img: "./video-and-img/lock9.jpg",
    price: 118.0,
    descTitle: "Hiplok Airlok Wall Mounted Lock / Hanger",
    desc: `AIRLOK is the first wall-mounted bicycle storage hanger with integrated hardened steel lock. With a combination of maximum gold level security, effortless practicality and design elegance the wall-mounted AIRLOK is the ultimate secure storage solution for apartment, work place or outside.`,
  },
  {
    id: 10,
    type: "Lezyne Classic HM BellAbus Bordo 6000 Lock",
    img: "./video-and-img/lock10.jpg",
    price: 59.99,
    descTitle: "Abus Bordo 6000 Lock",
    desc: `The Bordo 6000 is produced with 5mm steel bars which have an innovative 2 component soft touch coating to prevent damage to bike paintwork. The bars, the lock body and the special rivets linking them together are all produced from hardened steel. The link construction enables compact folding so transport is convenient, while maintaining the ability to lock the bike to large objects. Fitted with ABUS Extra Classe lock cylinder with encoded dimple keys, which are incredibly difficult to replicate. The Bordo 6000 is available in 75 or 90cm sizes and they are Sold Secure Silver approved.`,
  },
  {
    id: 11,
    type: "Hiplok POP Wearable Cable Lock",
    img: "./video-and-img/lock11.jpg",
    price: 16.0,
    descTitle: "Hiplok POP Wearable Cable Lock",
    desc: ``,
  },
  {
    id: 12,
    type: "Lezyne Classic HM Bell",
    img: "./video-and-img/lock12.jpg",
    price: 22.0,
    descTitle: "",
    desc: ``,
  },
  {
    id: 13,
    type: "Lezyne Classic HM Bell",
    img: "./video-and-img/lock13.jpg",
    price: 22.0,
    descTitle: "",
    desc: `Sometimes the most beautiful things in life are the most simple.

    Hiplok wanted to design a wearable bike lock accessible to a wider audience and we believe they’ve achieved it with the easy to use POP.
    
    POP’s unique, patent pending fastening system allows almost infinite waist sizing and adjustability, while the efficient and quick push-key mechanism makes locking up your bicycle a breeze. Perfect as a primary lock in low risk areas, or as an incredibly convenient secondary lock for higher risk use.
    
    The 10mm steel cable is extremely strong and will act as a serious deterrent and at a minimal 400 grams, you’ll barely feel you’re even carrying it.`,
  },
  {
    id: 14,
    type: "Force Chain Lock 100cm",
    img: "./video-and-img/lock14.jpg",
    price: 18.95,
    descTitle: "Force Chain Lock 100cm",
    desc: `100cm x 10mm chain lock with outer protective fabric coating, 
    2 x Keys, Weight: Approx 2kg`,
  },
  {
    id: 15,
    type: "Hiplok LITE Wearable Chain Lock",
    img: "./video-and-img/lock15.jpg",
    price: 40.0,
    descTitle: "Hiplok LITE Wearable Chain Lock",
    desc: `The Hiplok LITE features the same unique, award-winning wearable design of the Hiplok ORIGINAL but at almost half of the weight. It’s a great option as a medium risk area lock. Available in a number of colour ways to match your style, each Hiplok LITE features a highly reflective rear tab for added visibility of the rider in low-level light.

    Weighing in at 1kg the Hiplok LITE is barely noticeable when being worn.
    
    Secure, portable and winner of the Eurobike Award for Design it’s easy to see why riders around the world love Hiplok LITE.`,
  },
  {
    id: 16,
    type: "Hiplok GOLD Wearable Chain Lock",
    img: "./video-and-img/lock16.jpg",
    price: 70.0,
    descTitle: "Hiplok GOLD Wearable Chain Lock",
    desc: `As practical as it is tough, Hiplok GOLD wearable chain lock is the ultimate choice for the highest risk urban areas.

    Based on the proven design of the Hiplok ORIGINAL, the GOLD is a tough 10mm hardened steel chain lock, which using the integrated fastening can be adjusted to fit the rider’s waist without being locked. The new Hiplok speed buckle fastening makes carrying and using the strongest of bike locks easier than ever before.
    
    At 2.4kg the Hiplok GOLD is perfectly comfortable to wear whilst riding. The adjustable waist belt keeps the lock close to your body so you don’t feel uncomfortable whilst wearing it.
    
    `,
  },
  {
    id: 17,
    type: "Hiplok D Lock",
    img: "./video-and-img/lock17.jpg",
    price: 38.99,
    descTitle: "Hiplok D Lock",
    desc: `The Hiplok D is a compact high security D/U lock featuring Hiplok’s patent pending CLIP + RIDE system allowing for ease of carrying on bag straps and belts.`,
  },
  {
    id: 18,
    type: "Hiplok DXC D Lock With Cable",
    img: "./video-and-img/lock18.jpg",
    price: 58.0,
    descTitle: "Hiplok DXC D Lock With Cable",
    desc: `Maximum security D-lock (U-lock) and cable duo featuring CLIP + RIDE system for easy carrying on bags and belt straps. The Sold Secure Gold D-lock has a 14mm hardened steel shackle and hardened steel body, mated with dual locking, anti-twist shackle tabs to withstand the toughest of attacks.`,
  },
  {
    id: 19,
    type: "Sherlock Standard Bike GPS Tracker",
    img: "./video-and-img/lock19.jpg",
    price: 119.0,
    descTitle: "Sherlock Standard Bike GPS Tracker",
    desc: `Sherlock Bike Tracker is a invisible GPS anti-theft device for you pride and joy. The Sherlock standard tracker comes set up and ready to go, all you need do is install it into your bike which will take less than 5 minutes, thanks to its slim "bar end" design. With a build in rechargeable battery and globaly trackable thanks to the easy to use app, this device will help locate your bike for up to 2 weeks if it was to get stolen. At just 50g you will not even notice this device when riding.`,
  },
];

export const mudguardComponent = [
  {
    id: 1,
    type: "RRP ProGuard Bolt-On Mudguard",
    img: "./video-and-img/mudguard1.jpg",
    price: 28.99,
    descTitle: "RRP ProGuard Bolt-On Mudguard",
    desc: `First direct mount mudguard of its kind,
    No zip ties or velcro straps,
    Neatest looking large mudguard on the market,
    Easily removed in seconds,
    Height adjustability by 6mm,
    Angle adjustability for better fit if needed via 2 tilt brackets,
    2 thick rubber pads to protect your forks,
    Sticker recess for easy fit and sticker protection`,
  },
  {
    id: 2,
    type: "Crud Road Racer MK3 Mudguards",
    img: "./video-and-img/mudguard2.jpg",
    price: 29.99,
    descTitle: "Crud Road Racer MK3 Mudguards",
    desc: `The new Road Racer MK3 incorporates a unique, superfast fixing system and has been widended to accomodate tyres up to 35c. Weighing in at only 260 grams the pair, they fit to most 700c bikes including both disc and caliper brakes.`,
  },
  {
    id: 3,
    type: "RRP Rearguard V1 Mudguard",
    img: "./video-and-img/mudguard3.jpg",
    price: 1.99,
    descTitle: "RRP Rearguard V1 Mudguard",
    desc: `The perfect last minute mudguard. Very effective and fast fitting, RearGuard simply attaches the saddle rails with 2 velcro straps. It takes only 30 seconds! RearGuard offers great protection for your rear whether you're on or off road. Thanks to a custom thickness polypropylene, RearGuard is not flimsy, but also offers an excellent fit, unlike some guards available. The tough fitting strap will work with any post including aero posts.`,
  },
  {
    id: 4,
    type: "Ass Savers Regular Mudguard",
    img: "./video-and-img/mudguard4.jpg",
    price: 7.0,
    descTitle: "Ass Savers Regular Mudguard",
    desc: `The most important improvement with the ASS SAVER G4 is without a doubt the new patent pending FLIP-TIP? system. Not only does it make the ASS SAVER stick like glue but it has also substantially increased the compatibility`,
  },
  {
    id: 5,
    type: "Kinesis Fend Off Road Bike Mudguards",
    img: "./video-and-img/mudguard5.jpg",
    price: 46.99,
    descTitle: "Kinesis Fend Off Road Bike Mudguards",
    desc: `Whether you ride on your own or in a group, these Fend Off mudguards make riding in bad weather conditions a pleasure rather than a pain.`,
  },
  {
    id: 6,
    type: "RRP Rearguard V2 Off Road Mudguard",
    img: "./video-and-img/mudguard6.jpg",
    price: 7.5,
    descTitle: "RRP Rearguard V2 Off Road Mudguard",
    desc: `The perfect last minute mudguard. Very effective and fast fitting, RearGuard simply attaches the saddle rails with 2 velcro straps. It takes only 30 seconds! RearGuard offers great protection for your rear whether you're on or off road. Thanks to a custom thickness polypropylene, RearGuard is not flimsy, but also offers an excellent fit, unlike some guards available. The tough fitting strap will work with any post including aero posts. `,
  },
  {
    id: 7,
    type: "Crud XL Front Fender",
    img: "./video-and-img/mudguard7.jpg",
    price: 18.95,
    descTitle: "Crud XL Front Fender",
    desc: `The Crud XL full front mudguard offers the ultimate protection from anything on the trial. With its soft nose, the XL Fender guarantee's no clogging. The mudguard stays in place during the roughest ride thanks to the built in fixing loops to secure the guard to your forks.`,
  },
  {
    id: 8,
    type: "RRP Proguard Front Mudguard",
    img: "./video-and-img/mudguard8.jpg",
    price: 19.99,
    descTitle: "RRP Proguard Front Mudguard",
    desc: `ProGuard offers unmatched protection from mud and spray. The perfect guard for enduro or downhill racers and essential for weekend warriors looking for the very best protection whilst maximising tyre clearance and reducing the mud clogging issues seen with other mudguards of this style.`,
  },
  {
    id: 9,
    type: "RRP Proguard Rear Mudguard",
    img: "./video-and-img/mudguard9.jpg",
    price: 19.5,
    descTitle: "RRP Proguard Rear Mudguard",
    desc: `Designed to help protect your shock, linkages and bearings from getting hammered by mud, dirt and water from your back wheel. This helps to minimise cleaning post ride and maximise intervals between services. `,
  },
  {
    id: 10,
    type: "SKS RaceBlade Long V2 Mudguards - Black",
    img: "./video-and-img/mudguard10.jpg",
    price: 40.0,
    descTitle: "SKS RaceBlade Long V2 Mudguards - Black",
    desc: `Show your fellow riders you care; fit the best coverage mudguards you can get for your racing or winter bike, 
    Extra length and larger spoilers mean almost zero wheel spray to help maintain group-ride harmony, 
    Designed specifically for road race bikes without standard mudguard clearance.`,
  },
  {
    id: 11,
    type: "Mudhugger Rear Guard",
    img: "./video-and-img/mudguard11.jpg",
    price: 19.99,
    descTitle: "Mudhugger Rear Guard",
    desc: `Initially designed to overcome the problem of fitting mudguards to a bike with a dropper seat post the Rear Mudhugger works well on all bikes, providing they have disc brakes.
 
    Attaching the Hugger to the seat stays also overcomes all of the problems normally associated with rear mudguards. They do not move out of line, get in the way getting on or off the bike, do not foul rear suspension travel, and are robust enough to take the rough and tumble of modern trail riding demands.`,
  },
  {
    id: 12,
    type: "Ass Savers Mini Mudder Fork Mounted Front CX/Gravel Mudguard",
    img: "./video-and-img/mudguard12.jpg",
    price: 7.99,
    descTitle: "Ass Savers Mini Mudder Fork Mounted Front CX/Gravel Mudguard",
    desc: `The ass Savers Mini Mudder fork mounted front mudguard meets the needs of the growing gravel riding cycling discipline. As the gravel segment expands, cyclists face new challenges. The issue of having dirt thrown in your face is a well-known problem among mountain bikers. With huge clearances for wide tires in the front fork, gravel riders are now facing a similar issue.

    While mountain bikers are used to mud, gravel bikers face a different challenge. Anyone who has ridden on a wet gravel road is familiar with the mixture of fine sand and water that seems to be designed especially to seek and destroy bearings, not to mention what it does to your eyes on a long ride.
    
    The Mudder Mini is here to offer relief for your face and headset bearing. Simply mount it to your fork legs just above your front tire and you will dramatically reduce the amount of spray in the critical areas. The MUDDER Mini attaches with innovative adjustable anti-slip straps to guarantee an instant and perfect fit on all fork sizes.
    
    `,
  },
  {
    id: 13,
    type: "SKS Chromoplastic Mudguards 700c Road",
    img: "./video-and-img/mudguard13.jpg",
    price: 34.99,
    descTitle: "SKS Chromoplastic Mudguards 700c Road",
    desc: `Available in 700c wheel size 35 or 45mm width
    Available in silver or black,
    SKS are the Rolls-Royce of mudguards; they are virtually unbreakable and are very elegant,
    The stainless steel v-shaped stays make for easy fitting and the quick release Secu-clips are far safer than standard fixings, preventing front wheel lock up in case of a foreign object getting trapped between guard and wheel.`,
  },
  {
    id: 14,
    type: "SKS Raceblade Pro Mudguard Set",
    img: "./video-and-img/mudguard14.jpg",
    price: 41.99,
    descTitle: "SKS Raceblade Pro Mudguard Set",
    desc: `The ultimate clip-on mudguard set for road bikes. These guards are designed to fit any road bike and are set for max tyre width of 25mm. The smart double hinged quick release fitting system also fits aero forks and is compatible with disc brakes. The Mudguards can be perfectly adapted to the radius of the wheel by adjusting the length of the stays by hand. Superlight extra long mud flaps give additional spray protection. Includes adhesive protection kit to avoid damaging the paintwork.`,
  },
];

export const mirrorComponent = [
  {
    id: 1,
    type: "Zefal Spy Universal Mirror",
    img: "./video-and-img/mirror1.jpg",
    price: 9.89,
    descTitle: "Zefal Spy Universal Mirror",
    desc: `Handlebar diameter: From 16.5mm to 21mm,
    Material: Unbreakable chrome plated plastic,
    Mirror: Convex,
    Mirror surface: 15 cm²,
    Mounting: Snap-on mounting with rubber strap,
    Weight: 25g`,
  },
  {
    id: 2,
    type: "Zefal Cyclop Bar End Mirror",
    img: "./video-and-img/mirror2.jpg",
    price: 10.79,
    descTitle: "Zefal Cyclop Bar End Mirror",
    desc: `Handlebar diameter: From 16.5mm to 21mm,
    Material: Unbreakable chrome plated plastic,
    Mirror: Convex,
    Mirror surface: 46cm²,
    Mounting: Universal bar end fitting (left and right),
    Rotation: Fully adjustable,
    Weight: 60g`,
  },
  {
    id: 3,
    type: "Zefal Spin Bar End Mirror",
    img: "./video-and-img/mirror3.jpg",
    price: 11.99,
    descTitle: "Zefal Spin Bar End Mirror",
    desc: `Handlebar diameter: From 16.5mm to 21mm,
    Material: Unbreakable chrome plated plastic,
    Mirror: Convex,
    Mirror surface: 15cm²,
    Mounting: Universal bar end fitting (left and right),
    Weight: 45g`,
  },
];

export const lightsComponent = [
  {
    id: 1,
    type:
      "Moon Meteor-X Pro Front & Comet-X Rear Rechargeable Bike Light Set - 2019",
    img: "./video-and-img/light1.jpg",
    price: 37.0,
    descTitle:
      "Moon Meteor-X Pro Front & Comet-X Rear Rechargeable Bike Light Set - 2019",
    desc: `Light sensitive auto ON/OFF- To help you to conserve battery power when the light is not needed,
    Waterproof to IPX 4,
    Light Memory Mode – Stay on the same mode even when you turn the light off,
    Lumen and Run Time are tested under ANSI FL-1 Standard,
    Daylight Flash Mode – Making a cyclist more visible during the daytime, 
    Low battery, charging and fully charged indicator.`,
  },
  {
    id: 2,
    type: "NITERIDER Swift 500 / Sabre 80 Bike Light Set",
    img: "./video-and-img/light2.jpg",
    price: 47.99,
    descTitle: "NITERIDER Swift 500 / Sabre 80 Bike Light Set",
    desc: `The NiteRider® Swift™ 500 delivers everyday reliable performance in an economical ultra-compact head light. Sporting features like an easy on and off handlebar strap mount, low battery indicator and to top it off, it’s USB Rechargeable; making it the perfect light of choice for commuters and cycling enthusiasts. Although small in size, make no mistake; the Swift™ 500 packs a big punch with a maximum light output of 500 lumens! Powered by an internal Lithium Ion battery, in Walk Mode, the Swift™ 500 can run for up to twenty-five hours before it needs a charge.
    `,
  },
  {
    id: 3,
    type: "Moon Nebula Front & Rear Rechargeable Bike Light Set - 2019",
    img: "./video-and-img/light3.jpg",
    price: 49.99,
    descTitle: "Moon Nebula Front & Rear Rechargeable Bike Light Set - 2019",
    desc: `Rechargeable lithium polymer battery
    Mode memory function
    Auto safe mode
    Quick release universal bracket (fits all round and AERO style bars)
    Low battery, charging and fully charged indicator
    Automatic fully charged cut-off system
    Water resistance (IPX 4)
    Recharge time: 2.5hrs`,
  },
  {
    id: 4,
    type: "NITERIDER Swift 300 / Sabre 80 Bike Light Set",
    img: "./video-and-img/light4.jpg",
    price: 28.0,
    descTitle: "NITERIDER Swift 300 / Sabre 80 Bike Light Set",
    desc: `The NiteRider® Swift™ 300 delivers everyday reliable performance in an economical ultra-compact head light. Sporting features like an easy on and off handlebar strap mount, low battery indicator and to top it off, it’s USB Rechargeable; making it the perfect light of choice for commuters and cycling enthusiasts. Although small in size, make no mistake; the Swift™ 300 packs a big punch with a maximum light output of 300 lumens! Powered by an internal Lithium Ion battery, in Walk Mode, the Swift™ 300 can run for up to twenty-seven hours before it needs a charge.`,
  },
  {
    id: 5,
    type: "NITERIDER Lumina Micro 650 / Sabre 80 Bike Light Set",
    img: "./video-and-img/light5.jpg",
    price: 38.5,
    descTitle: "NITERIDER Lumina Micro 650 / Sabre 80 Bike Light Set",
    desc: `Big things come in small packages and the NiteRider® Lumina™ Micro 650 is the proof. The Lumina™ Micro 650 delivers a powerful punch with 650 lumens of light output, helping you to safely navigate your ride. Allowing you to see and be seen. As with all Luminas in the series, it features a low battery indicator – when the power button changes from blue to red color this indicates that there is approximately 15-20% battery life remaining.
    `,
  },
  {
    id: 6,
    type: "Cateye Sync Set Core Kinetic Front & Rear Bike Light Set",
    img: "./video-and-img/light6.jpg",
    price: 68.0,
    descTitle: "Cateye Sync Set Core Kinetic Front & Rear Bike Light Set",
    desc: `The definitive starting point for the CatEye SYNC consumer
    Switch both lights on / off with the power button of the SYNC Core front light
    Additional lights can be added and fully customised for enhanced, dynamic, controlled visibility, day or night
    `,
  },
  {
    id: 7,
    type: "Moon Comet-X Pro Rechargeable Rear Light",
    img: "./video-and-img/light7.jpg",
    price: 22.0,
    descTitle: "Moon Comet-X Pro Rechargeable Rear Light",
    desc: `The Comet-X Pro has been designed for everyday use, with an integrated high output COB LED.`,
  },
  {
    id: 8,
    type: "Moon Comet-X Rechargeable Rear Light",
    img: "./video-and-img/light8.jpg",
    price: 16.99,
    descTitle: "Moon Comet-X Rechargeable Rear Light",
    desc: `The Comet-X has been designed for everyday use, with an integrated high output COB LED. `,
  },
  {
    id: 9,
    type: "Moon Nebula Rechargeable Rear Bike Light - 2019",
    img: "./video-and-img/light9.jpg",
    price: 34.99,
    descTitle: "Moon Nebula Rechargeable Rear Bike Light - 2019",
    desc: `Waterproof to IPX 4
    Light Memory Mode: Stay on the same mode even when you turn the light off
    Lumen and Run Time are tested under ANSI FL-1 Standard
    Daylight Flash Mode: Making a cyclist more visible during the daytime 
    Low battery, charging & fully charged indicator
    Auto safe mode (around 1hr)`,
  },
  {
    id: 10,
    type: "Moon Alcor Rechargeable Rear Bike Light",
    img: "./video-and-img/light10.jpg",
    price: 13.0,
    descTitle: "Moon Alcor Rechargeable Rear Bike Light",
    desc: `1 x red 5050 LED,
    15 lumen output,
    270 degree total beam angle,
    Day flash mode,
    Mode memory,
    Magentic bracket,
    250 mAh Li-PO integrated battery,
    USB Rechargeable`,
  },
  {
    id: 11,
    type: "Lezyne Light Replacement Rubber Bungs",
    img: "./video-and-img/light11.jpg",
    price: 2.0,
    descTitle: "Lezyne Light Replacement Rubber Bungs",
    desc: `Rubber press in bung, which covers the USB plug, for the Lezyne lights. 
    See Choices for light models.`,
  },
  {
    id: 12,
    type: "Lezyne Zecto Drive Max 250 Rechargeable Rear Bike Light",
    img: "./video-and-img/light12.jpg",
    price: 38.5,
    descTitle: "Lezyne Zecto Drive Max 250 Rechargeable Rear Bike Light",
    desc: `Super compact, ultra-visible taillight with increased battery capacity, 3 Powerful LED produce up to 250 lumens in Daytime Flash mode. 8 total modes including the long-lasting Economy Mode for up to 24 hours runtime. Durable composite matrix construction featuring a machined aluminum faceplate. Patented versatile 2-in-1 clip and strap mountain system. Micro-USB rechargeable.`,
  },
  {
    id: 13,
    type: "Fabric Lumaray V2 GPS Mount Front Light",
    img: "./video-and-img/light13.jpg",
    price: 39.5,
    descTitle: "Fabric Lumaray V2 GPS Mount Front Light",
    desc: `Be seen with Fabric's Lumaray V2 of light featuring a 270° visibility, thanks to the wrap-around LED strip. The Lumaray fits seamlessly between your GPS computer and uses a Garmin 1/4 turn mount helping to cut down the clutter on your handle bars.`,
  },
  {
    id: 14,
    type: "Moon Meteor Storm Pro Rechargeable Front Bike Light - 2019",
    img: "./video-and-img/light14.jpg",
    price: 79.99,
    descTitle: "Moon Meteor Storm Pro Rechargeable Front Bike Light - 2019",
    desc: `The Meteor Storm Pro front light features upgraded features for 2019 including, VLS (Variable Lumen System) which allows you to set any lumen you would want, from 0 to 1700 Lm. The Storm Pro also features 10 light modes letting you tune the light to your riding style, weather its commuting to trail riding this light has you covered.`,
  },
  {
    id: 15,
    type: "NITERIDER Lumina Micro 850 Front Bike Light",
    img: "./video-and-img/light15.jpg",
    price: 51.5,
    descTitle: "NITERIDER Lumina Micro 850 Front Bike Light",
    desc: `Producing 850 brilliant lumens, the NiteRider® Lumina™ Micro 850 is smaller, lighter, and more compact than the original Lumina™ series. Its compact profile and high light output make the Lumina™ Micro 850 ideal for helmet mounted applications, helmet mount available as an optional accessory. Using the included handlebar mount (fits up to 35mm) with quick release tab, prevents any chance of theft by allowing convenient removal and installation of the head light.`,
  },
  {
    id: 16,
    type: "Moon Meteor Storm Rechargeable Front Bike Light - 2019",
    img: "./video-and-img/light16.jpg",
    price: 59.99,
    descTitle: "Moon Meteor Storm Rechargeable Front Bike Light - 2019",
    desc: `The Meteor Storm front light features upgraded features for 2019 including, VLS (Variable Lumen System) which allows you to set any lumen you would want, from 0 to 1700 Lm. The Storm is the ideal light for commuting to trail riding.`,
  },
  {
    id: 17,
    type: "Moon Meteor C2 Titanium Rechargeable Front Bike Light - 2019",
    img: "./video-and-img/light17.jpg",
    price: 19.0,
    descTitle: "Moon Meteor C2 Titanium Rechargeable Front Bike Light - 2019",
    desc: `Light sensitive auto ON/OFF- To help you to conserve battery power when the light is not needed
    Waterproof to IPX 4
    Light Memory Mode: Stay on the same mode even when you turn the light off
    Lumen and Run Time are tested under ANSI FL-1 Standard
    Daylight Flash Mode: Making a cyclist more visible during the daytime
    Battery capacity and charging indicator`,
  },
  {
    id: 18,
    type: "Moon MX GPS Mount Rechargeable Front Bike Light",
    img: "./video-and-img/light18.jpg",
    price: 40,
    descTitle: "Moon MX GPS Mount Rechargeable Front Bike Light",
    desc: `The Moon MX GPS mount front bike light mounts directly to your bike stem face plate and features a mount on the top to allow you to attach your Garmin GPS device. Providing a bright 400 Lumens with adjustable beam angle the Moon MX LED front bike light features a variable output allowing you to choose from various modes and run times depending on the light conditions and your riding environment.
    `,
  },
];

export const gearHangerComponent = [
  {
    id: 1,
    type: "SunRace Rear Derailleur Extender Link",
    img: "./video-and-img/gear1.jpg",
    price: 7.99,
    descTitle: "SunRace Rear Derailleur Extender Link",
    desc: `The SunRace rear derailleur extender link fits onto your existing hanger to extending it so that you can use of much larger cassettes. Compatible with single chainring drivetrain and ideal for your gravel bike setup.`,
  },
  {
    id: 2,
    type: "Wolf Tooth RoadLink",
    img: "./video-and-img/gear2.jpg",
    price: 24,
    descTitle: "Wolf Tooth RoadLink",
    desc: `The Wolf Tooth RoadLink derailleur hanger extension offsets the position of your road derailleur making it possible to run a wider mountain bike cassette ideal if you’re looking to convert to a 1x set up with minimal fuss.
 
    If you're looking for the simplicity of a single chainring up front or even just want lower bail-out gears on your double without changing your existing groupset or losing shifting performance and chain wrap, then the RoadLink is for you.  
     
    The RoadLink is optimized for use with 10 or 11-speed 11-36t and 11-40t cassettes, Shimano road derailleurs and is best paired with Wolf Tooth’s 40-tooth GC cassette extenders and Drop-Stop chainrings.`,
  },
  {
    id: 3,
    type: "Wolf Tooth GoatLink",
    img: "./video-and-img/gear3.jpg",
    price: 22,
    descTitle: "Wolf Tooth GoatLink",
    desc: `The Wolf Tooth Goatlink derailleur hanger extension offsets the position of your rear derailleur improving long-term shifting performance and making it possible to run Wolf Tooth Giant Cog cassette expanders in an optimal position. If you’re looking to climb the steepest climbs on a 1x set up, this is a hassle-free way to do so.`,
  },
  {
    id: 4,
    type: "Kinesis Dropout 3 Derailleur Hanger",
    img: "./video-and-img/gear4.jpg",
    price: 14.5,
    descTitle: "Kinesis Dropout 3 Derailleur Hanger",
    desc: `Kinesis Dropout 3 derailleur hanger to fit:
    "\n"
    Racelight - T, T2 (frame, excluding complete bike), TK, TK2, TK3, 4S, KR210
    "\n"
    Crosslight - T, T2, T3, T4, FiveT, Pro, Pro2, Pro3, Pro4, Pro5 (5T Disc is Dropout 10)`,
  },
  {
    id: 5,
    type: "Wolf Tooth Direct Mount RoadLink",
    img: "./video-and-img/gear5.jpg",
    price: 33,
    descTitle: "Wolf Tooth Direct Mount RoadLink",
    desc: `The Wolf Tooth RoadLink derailleur hanger extension offsets the position of your R8000 and R9100 road derailleur making it possible to run a wider mountain bike cassette ideal if you’re looking to convert to a 1x set up with minimal fuss.
 
    If you're looking for the simplicity of a single chainring up front or even just want lower bail-out gears on your double without changing your existing groupset or losing shifting performance and chainwrap, then the RoadLink is for you.  `,
  },
  {
    id: 6,
    type: "Sensa Giulia G1 Derailleur Hanger",
    img: "./video-and-img/gear6.jpg",
    price: 17.95,
    descTitle: "Sensa Giulia G1 Derailleur Hanger",
    desc: `Replacement mech hanger for Sensa Giulia frame (Not G2 Model)
    This frame was supplied with either a black or silver hanger. These are not interchangeable
    Includes bolts`,
  },
  {
    id: 7,
    type: "Sensa Giulia G2/G3/Evo/Giulia Aero Derailleur Hanger",
    img: "./video-and-img/gear7.jpg",
    price: 17.99,
    descTitle: "Sensa Giulia G2/G3/Evo/Giulia Aero Derailleur Hanger",
    desc: `Replacement mech hanger for Sensa Giulia G2,G3,Evo & Aero frames
    Includes bolts`,
  },
  {
    id: 8,
    type: "Merlin Malt 1 Derailleur Hanger",
    img: "./video-and-img/gear8.jpg",
    price: 10,
    descTitle: "Merlin Malt 1 Derailleur Hanger",
    desc: `Fits our Malt 1 frame (polished alloy frames) Please note, this hanger will NOT fit Malt 1 Ltd Edtion frame (Blue Frame).

    Dropout 47`,
  },
  {
    id: 9,
    type: "Merlin Malt 4 / Rock Lobster Tig Team SL Derailleur Hanger",
    img: "./video-and-img/gear9.jpg",
    price: 17.95,
    descTitle: "Merlin Malt 4 / Rock Lobster Tig Team SL Derailleur Hanger",
    desc: `Replacement gear hanger for your Merlin Malt 4 frame or Rock Lobster Tig Team SL. Available in black or silver.

    Dropout 38.`,
  },
  {
    id: 10,
    type: "Kinesis Dropout 19 Derailleur Hanger",
    img: "./video-and-img/gear10.jpg",
    price: 22.99,
    descTitle: "Kinesis Dropout 19 Derailleur Hanger",
    desc: `Kinesis dropout 19 to fit all of the Kinesis GTD frames.`,
  },
  {
    id: 11,
    type: "Sensa Fermo Derailleur Hanger",
    img: "./video-and-img/gear11.jpg",
    price: 17.95,
    descTitle: "Sensa Fermo Derailleur Hanger",
    desc: `Replacement mech hanger for Sensa Fermo frame, 
    Includes bolts`,
  },
  {
    id: 12,
    type: "Merlin Axe7 Pro Derailleur Hanger",
    img: "./video-and-img/gear12.jpg",
    price: 17.99,
    descTitle: "Merlin Axe7 Pro Derailleur Hanger",
    desc: `Replacement mech hanger for Merlin Axe 7 PRO Bikes`,
  },
  {
    id: 13,
    type: "Sensa Trentino SL / Romagna / Umbria / Emilia Gear Hanger",
    img: "./video-and-img/gear13.jpg",
    price: 17.95,
    descTitle: "Sensa Trentino SL / Romagna / Umbria / Emilia Gear Hanger",
    desc: `Replacement mech hanger for Sensa Trentino SL / Romagna / Umbria / Emilia frames`,
  },
  {
    id: 14,
    type: "Merlin Malt 2 Derailleur Hanger",
    img: "./video-and-img/gear14.jpg",
    price: 17.95,
    descTitle: "Merlin Malt 2 Derailleur Hanger",
    desc: `Replacement gear hanger for Merlin Malt 2 frames.`,
  },
  {
    id: 15,
    type: "Sensa Merano 29er Derailleur Hanger 2019",
    img: "./video-and-img/gear15.jpg",
    price: 17.95,
    descTitle: "Sensa Merano 29er Derailleur Hanger 2019",
    desc: `Replacement mech hanger for Sensa Merano 29er frame, 
    Includes bolts and
    Pre 2020 models`,
  },
  {
    id: 16,
    type: "Sensa Sella 29er Derailleur Hanger",
    img: "./video-and-img/gear16.jpg",
    price: 17.95,
    descTitle: "Sensa Sella 29er Derailleur Hanger",
    desc: `Replacement mech hanger for Sensa Sella 29er frame, 
    Includes bolts`,
  },
  {
    id: 17,
    type: "Sensa Fiori SL Derailleur Hanger",
    img: "./video-and-img/gear17.jpg",
    price: 17.99,
    descTitle: "Sensa Fiori SL Derailleur Hanger",
    desc: `Replacement mech hanger for Sensa Fiori SL TNT MTB frame, 
    Includes bolts`,
  },
  {
    id: 18,
    type: "Ridley Noah Fast Disc Derailleur Hanger",
    img: "./video-and-img/gear18.jpg",
    price: 19.99,
    descTitle: "Ridley Noah Fast Disc Derailleur Hanger",
    desc: `Replacement mech hanger for Ridley Noah Fast Disc road bike`,
  },
  {
    id: 19,
    type: "Ridley Replacement Derailleur Hanger",
    img: "./video-and-img/gear19.jpg",
    price: 19,
    descTitle: "Ridley Replacement Derailleur Hanger",
    desc: `Replacement mech hanger for Ridley Noah Fast Disc road bike`,
  },
  {
    id: 20,
    type: "Eddy Merckx San Remo 76 Caliper Brake Derailleur Hanger",
    img: "./video-and-img/gear20.jpg",
    price: 19,
    descTitle: "Eddy Merckx San Remo 76 Caliper Brake Derailleur Hanger",
    desc: `Replacement mech hanger for Eddy Merckx San Remo 76 Caliper Brake Road Bike`,
  },
];
