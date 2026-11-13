/* =====================================================================
   HOLIDAY GIFTING 2026 — data file (edit this file, not index.html)
   ---------------------------------------------------------------------
   GOODIES_SLIDES  : "Goodies That Get Noticed" carousel on the landing page.
                     Add as many objects as you like. Each slide needs a
                     background image (bg) and EITHER a product id from
                     HOLIDAY_PRODUCTS ("product") OR explicit card fields:
                     {bg, img, title, desc, price, moq, cat}.
   HOLIDAY_KITS    : "Themes" tab. items = product ids from HOLIDAY_PRODUCTS.
                     The kit price shown is the sum of its item prices.
   HOLIDAY_PRODUCTS: snapshot of the "Holiday Gifting Storelink Format"
                     sheet (Main Sheet), selling price = "Discounted Price".
                     Vendor costs and internal columns are deliberately
                     NOT included.
   ===================================================================== */
const GOODIES_SLIDES = [
 {
  "bg": "assets/holiday/goodies-1.jpg",
  "product": "h078"
 },
 {
  "bg": "assets/holiday/goodies-2.jpg",
  "product": "h101"
 }
];

const HOLIDAY_KITS = [
 {
  "name": "The Holiday Kit",
  "img": "assets/holiday/kit-1.jpg",
  "items": [
   "h134",
   "h069",
   "h001",
   "h090"
  ]
 },
 {
  "name": "The Travel Kit",
  "img": "assets/holiday/kit-2.jpg",
  "items": [
   "h024",
   "h005",
   "h102",
   "h089"
  ]
 },
 {
  "name": "Movie Night Kit",
  "img": "assets/holiday/kit-3.jpg",
  "items": [
   "h000",
   "h093",
   "h104",
   "h113"
  ]
 },
 {
  "name": "Camping Kit",
  "img": "assets/holiday/kit-4.jpg",
  "items": [
   "h013",
   "h088",
   "h047",
   "h030"
  ]
 },
 {
  "name": "Slow Living Kit",
  "img": "assets/holiday/kit-5.jpg",
  "items": [
   "h124",
   "h086",
   "h041",
   "h108"
  ]
 },
 {
  "name": "Home Chef Kit",
  "img": "assets/holiday/kit-6.jpg",
  "items": [
   "h100",
   "h045",
   "h016",
   "h083"
  ]
 },
 {
  "name": "Game Night Kit",
  "img": "assets/holiday/kit-7.jpg",
  "items": [
   "h114",
   "h116",
   "h105",
   "h111"
  ]
 },
 {
  "name": "Road Trip Kit",
  "img": "assets/holiday/kit-8.jpg",
  "items": [
   "h004",
   "h018",
   "h011",
   "h078"
  ]
 }
];

const HOLIDAY_PRODUCTS = [
{
"id": "h000",
"name": "travelXOXO Sherpa Blanket",
"cat": "Home Essentials",
"brand": "travelXOXO",
"price": 3149.0,
"mrp": 4749,
"moq": 500,
"desc": "Double-sided design with 280 GSM flannel fleece on one side and 220 GSM plush Sherpa on the other",
"longDesc": "Double-sided design with 280 GSM flannel fleece on one side and 220 GSM plush Sherpa on the other Offers two different textures for enhanced comfort—smooth on one side, fluffy on the other Blanket size: 50\" x 60\" when unfolded Folded dimensions: 14.5\" x 12.2\"",
"feats": [
"Material: Flannel Fleece",
"Colour: Black/White",
"Lead time: ~45 days",
"MOQ 500 units"
],
"badge": "Top Rated",
"icon": "⭐",
"img": "assets/holiday/p000.jpg",
"img2": "https://cdn.store.link/products/store18473/2orpdb-csun-0820.jpg?versionId=zlEuAFrlcud0qKP6aQDPKZjAYLKbvZJc",
"tier": "Pinnacle"
},
{
"id": "h001",
"name": "travelXOXO Coral Fleece Blanket",
"cat": "Home Essentials",
"brand": "travelXOXO",
"price": 2399.0,
"mrp": 3749,
"moq": 500,
"desc": "Soft, lightweight warmth that feels cozy all year round",
"longDesc": "Soft, lightweight warmth that feels cozy all year round Versatile for home and travel Dimensions: 50\" x 60\"",
"feats": [
"Material: Polyester Micro fibres",
"Colour: White",
"Lead time: ~30 days",
"MOQ 500 units"
],
"img": "assets/holiday/p001.jpg",
"img2": "https://cdn.store.link/products/store18473/cfmm72-csun-0307.png?versionId=puQleHMLW8cTudJQNTng1zZB7fej.FPB",
"tier": "Supreme"
},
{
"id": "h002",
"name": "Novel Duffle Bag Charm",
"cat": "Travel Extreme",
"brand": "travelXOXO",
"price": 299.0,
"mrp": 549,
"moq": 25,
"desc": "Miniature, classic duffle bag charm designed to add a pop of personality while storing tiny essentials.",
"longDesc": "Miniature, classic duffle bag charm designed to add a pop of personality while storing tiny essentials. Features a sturdy metal keyring with a clip for easy attachment to bags, keys, or carabiners. Made from 100% recycled 600D polyester (excluding trims) with smooth webbing details. Includes a secure zippered closure to keep small items safe.",
"feats": [
"Material: Polyester",
"Lead time: ~7 days",
"MOQ 25 units"
],
"img": "assets/holiday/p002.jpg",
"img2": "https://cdn.store.link/products/store18473/uv-q55-novel%20duffle%20bag%20charm%20b.png?versionId=eb7PICUcBLwzCdDncAWVRD.XZIIsPUxA",
"tier": "Signature"
},
{
"id": "h003",
"name": "travelXOXO Charm - Tote Bag",
"cat": "Travel Extreme",
"brand": "travelXOXO",
"price": 249.0,
"mrp": 499,
"moq": 25,
"desc": "Miniature, classic tote bag charm designed to add a pop of personality while storing tiny essentials.",
"longDesc": "Miniature, classic tote bag charm designed to add a pop of personality while storing tiny essentials. Features a sturdy metal keyring with a clip for easy attachment to bags, keys, or carabiners. Made from 100% recycled 600D polyester (excluding trims) with smooth webbing details. Includes a secure zippered closure to keep small items safe. Compact dimensions of 2.76\" (H) x 3.15\" (W) x 1.18\" (D). Ultra-lightweight build weighing just 0.09 lbs (0.04 kg).",
"feats": [
"Material: Polyester",
"Lead time: ~7 days",
"MOQ 25 units"
],
"badge": "Top Rated",
"icon": "⭐",
"img": "assets/holiday/p003.jpg",
"img2": "https://cdn.store.link/products/store18473/64q0wt-heritage%20tote%20bag%20charm1%20%281%29.png?versionId=UR9e2F3KRYl9fcgdbrIrPG3rFMH6bLzG",
"tier": "Signature"
},
{
"id": "h004",
"name": "travelXOXO Foldable Car Trunk Organiser",
"cat": "Travel Extreme",
"brand": "travelXOXO",
"price": 3149.0,
"mrp": 5999,
"moq": 25,
"desc": "Spacious trunk organizer with multiple compartments for efficient storage and organization.",
"longDesc": "Spacious trunk organizer with multiple compartments for efficient storage and organization. Reinforced construction with sturdy base panels ensures enhanced durability and shape retention. Features adjustable dividers to customize storage space according to your needs. Non-slip base and adjustable securing straps keep the organizer firmly in place during travel. Multiple mesh and covered side pockets provide easy access to smaller essentials. Foldable design allows compact storage when not in use and easy portability. Detachable lid helps keep belongings protected, organized, and out of sight. Ideal for storing groceries, emergency kits, travel essentials, office supplies, sports gear, toys, and car accessories. Suitable for cars, SUVs, and other vehicles, making every journey more organized. A practical choice for everyday use, road trips, and premium corporate gifting.",
"feats": [
"Material: 100% Polyester",
"Colour: Black",
"Lead time: ~7 days",
"MOQ 25 units"
],
"badge": "Top Rated",
"icon": "⭐",
"img": "assets/holiday/p004.jpg",
"img2": "https://cdn.store.link/products/store18473/-ahjxk-whatsapp%20image%202026-07-24%20at%2016.36.23%20%281%29.jpeg?versionId=nvlBQzqEhAW___LrZTV870HTDUdZlgJW",
"tier": "Pinnacle"
},
{
"id": "h005",
"name": "travelXOXO Travel Organiser",
"cat": "Travel Extreme",
"brand": "travelXOXO",
"price": 349.0,
"mrp": 579,
"moq": 50,
"desc": "A multi-functional organizer for electronics or other items during travel",
"longDesc": "A multi-functional organizer for electronics or other items during travel Three smaller zippered pockets for medicines, chargers, chords or other accessories Size: 8\" H x 0.7\" W x 9\" L",
"feats": [
"Material: polyester",
"Colour: Dark Grey",
"Lead time: ~14 days",
"MOQ 50 units"
],
"badge": "Top Rated",
"icon": "⭐",
"img": "assets/holiday/p005.jpg",
"img2": "https://cdn.store.link/products/store18473/1lxc00-whatsapp%20image%202026-08-14%20at%203.57.47%20pm.jpeg?versionId=4bakP8vmOc3mu5VAE92NrFKEod5OebRm",
"tier": "Signature"
},
{
"id": "h006",
"name": "travelXOXO Trio Clean Bags - Set of 3",
"cat": "Travel Extreme",
"brand": "travelXOXO",
"price": 299.0,
"mrp": 629,
"moq": 50,
"desc": "Made from durable polyester with rip‑stop weave for long‑lasting use",
"longDesc": "Made from durable polyester with rip‑stop weave for long‑lasting use Includes Shoe bag, laundry baag & Accessory bag enclosed in a zipper carrying bag Laundry bag is blue, accessory bag green, shoe bag is orange and carrying bag black Compact size of each bag: 9″ H × 0.5″ W × 11.25″ L Ideal for traveling or long business trips, keeping items organized and separate.",
"feats": [
"Material: Polyester",
"Colour: Black",
"Lead time: ~14 days",
"MOQ 50 units"
],
"img": "assets/holiday/p006.jpg",
"img2": "https://cdn.store.link/products/store18473/hf-55f-csun-0157.jpg?versionId=hkH_tPp97m2E8zaIRp8.7eNJHJ_4SMbx",
"tier": "Signature"
},
{
"id": "h007",
"name": "travelXOXO To Go Sling",
"cat": "Travel Extreme",
"brand": "travelXOXO",
"price": 299.0,
"mrp": 629,
"moq": 50,
"desc": "Lightweight, everyday essential designed for effortless carrying",
"longDesc": "Lightweight, everyday essential designed for effortless carrying Made from durable fabric for long-lasting use Ideal for shopping, commuting, or casual outings Minimalist design offers ample space for daily essentials Sleek and easy to store when not in use",
"feats": [
"Material: Polyester",
"Colour: Black",
"Lead time: ~14 days",
"MOQ 50 units"
],
"img": "assets/holiday/p007.jpg",
"img2": "https://cdn.store.link/products/store18473/fqhcwd-csun-0225.jpg?versionId=8Il8WWw4jtYj3KMEMZx5uVpKNzTwD90G",
"tier": "Signature"
},
{
"id": "h008",
"name": "travelXOXO Carry On Sling",
"cat": "Travel Extreme",
"brand": "travelXOXO",
"price": 699.0,
"mrp": 1379,
"moq": 50,
"desc": "Made from 100% polyester outer material",
"longDesc": "Made from 100% polyester outer material Ideal for organizing valuables while traveling Features an adjustable, detachable carry strap Main and inner compartments with zip closures Includes an additional external compartment Extra pockets for organizing accessories Top opening allows quick and easy access Adjustable shoulder strap for comfortable carrying Dimensions: 6.75\" x 12.5\" x 3.25\"",
"feats": [
"Material: Polyester",
"Colour: Black",
"Lead time: ~14 days",
"MOQ 50 units"
],
"img": "assets/holiday/p008.jpg",
"img2": "https://cdn.store.link/products/store18473/icwt10-csun-0177%20%281%29.jpg?versionId=cPlyvl5mxdyey.22DQDKOv.2bmUiz4Dl",
"tier": "Signature"
},
{
"id": "h009",
"name": "SOIL Earthtone Canvas Pouch Set of 3",
"cat": "Travel Extreme",
"brand": "SOIL",
"price": 549.0,
"mrp": 1129,
"moq": 25,
"desc": "Storage zip pouches made from organic fabric",
"longDesc": "Storage zip pouches made from organic fabric Comes in a set of 3 with secure zipper closures Designed for multi-functional everyday use Ideal for storing medicines, jewellery, cosmetics, money, stationery, keys, and more Eco-friendly and convenient for travel or daily organization Sizes: Large – L16cm x W23cm, Medium – L13.6cm x W20.8cm, Small – L11.1cm x W15.5cm",
"feats": [
"Material: Cotton Canvas",
"Colour: Natural",
"Lead time: ~14 days",
"MOQ 25 units"
],
"img": "assets/holiday/p009.jpg",
"img2": "https://cdn.store.link/products/store18473/qno1e6-csun-0338.jpg?versionId=cVi8.amxsq1YXYuB7LAs7xUfjInmNd00",
"tier": "Signature"
},
{
"id": "h010",
"name": "SOIL Tag Along Wooden Luggage Tag",
"cat": "Travel Extreme",
"brand": "SOIL",
"price": 299.0,
"mrp": 759,
"moq": 100,
"desc": "Custom Bag Tags: Personalize with your details for easy luggage identification",
"longDesc": "Custom Bag Tags: Personalize with your details for easy luggage identification Perfect Travel Companion: Ideal for use at airports, railway stations, and bus depots Durable Build: Crafted to withstand travel wear and tear Size: 17.5 cm (H) x 5.5 cm (W) x 3 mm (Thickness) – sleek and lightweight design",
"feats": [
"Material: Wood",
"Colour: Custom Color",
"Lead time: ~14 days",
"MOQ 100 units"
],
"img": "assets/holiday/p010.jpg",
"img2": "https://cdn.store.link/products/store18473/chafd1-csun-0866.jpg?versionId=v5Pm.EVXSsv6QVeLcuiBbvthwxg.Bve8",
"tier": "Signature"
},
{
"id": "h011",
"name": "travelXOXO Adventure Duffle Bag",
"cat": "Duffles",
"brand": "travelXOXO",
"price": 749.0,
"mrp": 1229,
"moq": 25,
"desc": "Water-resistant and lightweight design",
"longDesc": "Water-resistant and lightweight design Stylish roll-down top with secure clip closure Can be carried in three ways: by the clip, as a duffle, or as a backpack Available in Red, Lime, Blue, and Black colors Packaging: Bulk",
"feats": [
"Material: Polyester",
"Colour: Black",
"Lead time: ~14 days",
"MOQ 25 units"
],
"badge": "Top Rated",
"icon": "⭐",
"img": "assets/holiday/p011.jpg",
"img2": "https://cdn.store.link/products/store18473/ukhykr-csun-0265.jpg?versionId=Q3tUvF7QrR6R9DZsl7tJuFsFOhh0VxV3",
"tier": "Signature"
},
{
"id": "h012",
"name": "travelXOXO Travel Blanket",
"cat": "Travel Extreme",
"brand": "travelXOXO",
"price": 1399.0,
"mrp": 2499,
"moq": 50,
"desc": "Product: Large Picnic Outdoor Blanket",
"longDesc": "Product: Large Picnic Outdoor Blanket Built to withstand harsh weather conditions, making it ideal for outdoor use Features Solid acrylic flap for a neat fold Folds into itself and includes a convenient carry handle for easy portability",
"feats": [
"Material: Cotton",
"Colour: Navy Blue",
"Lead time: ~14 days",
"MOQ 50 units"
],
"img": "assets/holiday/p012.jpg",
"img2": "https://cdn.store.link/products/store18473/tby5eo-csun-0851.jpg?versionId=cnIzG2vRVqInOeeOU.ZZHKJNIOvuvMIO",
"tier": "Elite"
},
{
"id": "h013",
"name": "travelXOXO Hapuna Cinch Pack",
"cat": "Totes & Slings",
"brand": "travelXOXO",
"price": 449.0,
"mrp": 749,
"moq": 25,
"desc": "Soft-touch, compactible cinch bag designed to fully secure your possessions while on the go.",
"longDesc": "Soft-touch, compactible cinch bag designed to fully secure your possessions while on the go. Roll-top closure functionality allows for quick, easy access to contents and packs down compactly for easy storage. Features double-cord shoulder straps for comfortable everyday carry. Constructed from durable 300D PU Matty material.",
"feats": [
"Material: 300 D Pu Matty",
"Lead time: ~7 days",
"MOQ 25 units"
],
"img": "assets/holiday/p013.jpg",
"img2": "https://cdn.store.link/products/store18473/g3dz4j-hapuna%20cinch%20bag%20a.png?versionId=xNHsgSSywXl9vV8tMlLcomzFozXTfCWT",
"tier": "Signature"
},
{
"id": "h014",
"name": "travelXOXO Never Stop Bucket Bag",
"cat": "Travel Extreme",
"brand": "travelXOXO",
"price": 549.0,
"mrp": 1129,
"moq": 25,
"desc": "Inspired by the lightweight, breathable and durable materials used in outdoor tents, combining rugged…",
"longDesc": "Inspired by the lightweight, breathable and durable materials used in outdoor tents, combining rugged functionality with everyday practicality. Chalk-bag-inspired shape provides a distinctive and functional design for carrying daily essentials. Made from 70D recycled nylon ripstop with a 1500 mm PU coating for durability and added protection. Features a non-PFC durable water-repellent (DWR) finish to help protect contents from light moisture. Recycled polyester mono mesh liner provides a lightweight and breathable interior. Reflective detailing enhances visibility in low-light conditions. Compact 4-litre capacity is suitable for carrying everyday essentials. Lightweight design weighs approximately 140 g. Dimensions and compact form make it convenient for everyday carry. Made with recycled materials for a more sustainable choice. Size: One Size. Volume: 4 litres.",
"feats": [
"Material: 300D Swade",
"Lead time: ~7 days",
"MOQ 25 units"
],
"img": "assets/holiday/p014.jpg",
"img2": "https://cdn.store.link/products/store18473/ddgled-water%20bottle%20holder%20c.png?versionId=7mZmoLeruT8Sr33bENkiIqKNHFQHIWJw",
"tier": "Signature"
},
{
"id": "h015",
"name": "travelXOXO Everyday Flap Crossbody Bag",
"cat": "Travel Extreme",
"brand": "SOIL",
"price": 649.0,
"mrp": 1249,
"moq": 25,
"desc": "Product Type: Sleek and compact crossbody pouch / belt bag designed for everyday convenience and…",
"longDesc": "Product Type: Sleek and compact crossbody pouch / belt bag designed for everyday convenience and hands-free carrying. Material: Made from sturdy and durable nylon fabric for reliable everyday use. Design: Features a classic black finish with a subtle duotone NVIDIA logo on the front flap for understated branding. Dimensions: Compact size of 18 cm × 12 cm × 2 cm, making it lightweight and easy to carry. Strap: Equipped with an adjustable braided rope strap with a cord-lock toggle for a comfortable and secure fit. Versatile Carrying: Can be worn crossbody or as a belt bag, making it suitable for daily outings, sports, workouts, and travel. Storage: Includes a rear zippered compartment for securely storing essentials such as cards, keys, or other small items. Quick Access Pocket: Features a front stretch mesh pocket for convenient access to frequently used items such as a phone or earphones. Closure: Designed with a flap closure secured by a snap button for added convenience and security. Additional Security: Includes a small snap-button loop at the base to provide extra security for the main flap. Branding: Suitable for branded merchandise and giveaways, combining functional utility with a minimal branded aesthetic.",
"feats": [
"Material: Nylon",
"Colour: Black",
"Lead time: ~14 days",
"MOQ 25 units"
],
"img": "assets/holiday/p015.jpg",
"img2": "https://cdn.store.link/products/store18473/eun2ir-1%20%281%29.jpg?versionId=UnUgOlRib3mVhikwq4vW1HxMDRf543RL",
"tier": "Signature"
},
{
"id": "h016",
"name": "CookEase Apron",
"cat": "Outerwear",
"brand": "OMG",
"price": 1399.0,
"mrp": 2749,
"moq": 50,
"desc": "Made of super soft cotton for maximum comfort",
"longDesc": "Made of super soft cotton for maximum comfort Protects against heat and dirt while cooking or working Comes with a neck strap for adjustable fit Includes a pocket for convenient storage Crafted from superior quality rich cotton fabric",
"feats": [
"Material: Cotton",
"Colour: Navy Blue",
"Lead time: ~14 days",
"MOQ 50 units"
],
"img": "assets/holiday/p016.jpg",
"img2": "https://cdn.store.link/products/store18473/-c3st9-omg%20ember%20apron_navy.png?versionId=jhzVndXakoWk8pc2ikRz7tFyWrOoZnee",
"tier": "Elite"
},
{
"id": "h017",
"name": "travelXOXO Sports Sling",
"cat": "Travel Extreme",
"brand": "travelXOXO",
"price": 749.0,
"mrp": 1499,
"moq": 25,
"desc": "Crafted from durable 230D twill polyester with a 240D polyester lining for long-lasting performance.",
"longDesc": "Crafted from durable 230D twill polyester with a 240D polyester lining for long-lasting performance. Spacious double-zippered main compartment provides secure storage for daily essentials. Front zippered pocket offers quick access to frequently used items. Front slip pocket adds convenient storage for small accessories. Back zippered pocket features an integrated elastic cup holder for added functionality. Interior slip pocket helps keep valuables and essentials organized. Adjustable padded shoulder sling ensures comfortable carrying throughout the day. Lightweight and practical design, ideal for travel, commuting, work, or everyday use. Material: Polyester.",
"feats": [
"Material: Polyester",
"Colour: Black",
"Lead time: ~14 days",
"MOQ 25 units"
],
"img": "assets/holiday/p017.jpg",
"img2": "https://cdn.store.link/products/store18473/a35m7d-im%201.jpg?versionId=OmPFyBRF7I5VTeTW.2no7Gq4vRlpbtdZ",
"tier": "Signature"
},
{
"id": "h018",
"name": "travelXOXO Backpack Cooler",
"cat": "Travel Extreme",
"brand": "travelXOXO",
"price": 999.0,
"mrp": 1999,
"moq": 25,
"desc": "Insulated main compartment helps keep food and beverages cool and fresh for extended periods.",
"longDesc": "Insulated main compartment helps keep food and beverages cool and fresh for extended periods. Spacious 20–25 L capacity holds approximately 24–30 cans with ice, making it ideal for picnics, office lunches, and outdoor adventures. Secure zippered closure ensures easy access while maintaining temperature retention. Front slip pocket provides convenient storage for small essentials such as keys, phone, or utensils. Dual side mesh pockets offer quick access to water bottles, umbrellas, or other accessories. Adjustable shoulder strap offers comfortable and hands-free carrying. Durable, lightweight construction is designed for everyday use and outdoor activities. Food-safe, easy-to-clean inner lining ensures hygienic storage. Ideal for picnics, camping, road trips, sporting events, beach outings, and daily commutes. Dimensions: 13\" (W) × 8.5\" (D) × 15\" (H). Suitable for custom branding with screen printing, heat transfer, or embroidery for promotional and corporate gifting.",
"feats": [
"Colour: Black",
"Lead time: ~14 days",
"MOQ 25 units"
],
"badge": "Top Rated",
"icon": "⭐",
"img": "assets/holiday/p018.jpg",
"img2": "https://cdn.store.link/products/store18473/tb7lfc-backpack%20cooler%201.png?versionId=MRERk.5hH63QK4BDppWeP7JO7B5aUqXE",
"tier": "Signature"
},
{
"id": "h019",
"name": "ET-TU Hoodie in a bag",
"cat": "Jackets & Hoodies",
"brand": "ET-TU",
"price": 2399.0,
"mrp": 4329,
"moq": 100,
"desc": "Made from 60% recycled cotton and 40% recycled polyester for sustainability.",
"longDesc": "Made from 60% recycled cotton and 40% recycled polyester for sustainability. Lightweight full-zip hoodie offering comfort, convertibility, and convenience. Cozy brushed fleece interior for added warmth and softness. Features ribbing at cuffs and waistband for a snug, secure fit.",
"feats": [
"Material: Cotton , Polyester",
"Colour: Grey",
"Sizes: XS, S, M, L, XL, 2XL, 3XL",
"Lead time: ~21 days",
"MOQ 100 units"
],
"img": "assets/holiday/p019.jpg",
"img2": "https://cdn.store.link/products/store18473/yyalyu-whatsapp%20image%202026-08-13%20at%2012.07.40%20pm.jpeg?versionId=QSgmwVWX5sNgMqhX6ar1W7o4zENLMSsA",
"tier": "Supreme"
},
{
"id": "h020",
"name": "travelXOXO Everywhere Belt Bag 1L",
"cat": "Travel Extreme",
"brand": "travelXOXO",
"price": 799.0,
"mrp": 1629,
"moq": 25,
"desc": "Compact crossbody sling bag designed for everyday use, travel, and casual outings.",
"longDesc": "Compact crossbody sling bag designed for everyday use, travel, and casual outings. Crafted from water-repellent fabric to help protect your belongings from light rain and splashes. Made with recycled polyester and nylon, offering a more sustainable choice. Adjustable shoulder strap provides a comfortable, customized fit. Exterior zippered pocket keeps valuables secure and easily accessible. Interior pockets help organize daily essentials such as a phone, wallet, keys, and cards. Elastic loops allow you to neatly tuck away the excess strap for a clean look. Lightweight 1 L capacity is ideal for carrying everyday essentials without added bulk. Dimensions: 19 cm (W) × 5 cm (D) × 13 cm (H). Strap Length (Fully Extended): 106 cm. Capacity: 1 L.",
"feats": [
"Colour: Black",
"Lead time: ~7 days",
"MOQ 25 units"
],
"img": "assets/holiday/p020.jpg",
"img2": "https://cdn.store.link/products/store18473/wvbpcv-whatsapp%20image%202026-06-15%20at%2012.50.38%20pm.jpeg?versionId=rIntgHSWDKfLE190bqfRWSkZ93p94yHe",
"tier": "Signature"
},
{
"id": "h021",
"name": "OMG Surrey Sweatshirt",
"cat": "Jackets & Hoodies",
"brand": "OMG",
"price": 1249.0,
"mrp": 2249,
"moq": 100,
"desc": "Made from 100% cotton, compacted, washed, and preshrunk for durability.",
"longDesc": "Made from 100% cotton, compacted, washed, and preshrunk for durability. Crafted with 280 GSM fabric for superior comfort and warmth. Ribbed cuffs and waistband ensure a snug, polished fit. Brushed interior provides soft, comfort.",
"feats": [
"Material: Cotton",
"Colour: White",
"Sizes: XS, S, M, L, XL, 2XL, 3XL",
"Lead time: ~14 days",
"MOQ 100 units"
],
"img": "assets/holiday/p021.jpg",
"img2": "https://cdn.store.link/products/store18473/mga9-e-csun-1118_xs.png?versionId=XdVSEn3sLVOAtBodCdsdsEXwqIInOHzK",
"tier": "Elite"
},
{
"id": "h022",
"name": "OMG Full Zipper Hoodie",
"cat": "Jackets & Hoodies",
"brand": "OMG",
"price": 1399.0,
"mrp": 2749,
"moq": 100,
"desc": "Made from 100% cotton, compacted, washed, and preshrunk for durability.",
"longDesc": "Made from 100% cotton, compacted, washed, and preshrunk for durability. Brushed interior provides warmth and comfort. Features a full-zip closure with a durable YKK zipper. Kangaroo pocket for practicality and convenience. Ribbed cuffs and hem offer a snug, polished fit. Crafted with rich, soft, and comfortable fabric.",
"feats": [
"Material: Cotton",
"Colour: Black/White",
"Sizes: XS, S, M, L, XL, 2XL, 3XL, 4XL, 5XL",
"Lead time: ~14 days",
"MOQ 100 units"
],
"img": "assets/holiday/p022.jpg",
"img2": "https://cdn.store.link/products/store18473/0fh148-csun-0107_xs.png?versionId=OmcbL6j7SQBLvpAY4pWsapLMbinD_XGI",
"tier": "Elite"
},
{
"id": "h023",
"name": "travelXOXO Air Packing Cubes - Set Of 3",
"cat": "Travel Extreme",
"brand": "travelXOXO",
"price": 1299.0,
"mrp": 1879,
"moq": 50,
"desc": "TravelXOXO three‑piece set made of  durable polyester",
"longDesc": "TravelXOXO three‑piece set made of  durable polyester Includes large, medium, and small packing cubes for versatile organization Ventilated mesh top panel for easy visibility and airflow Ideal for separating clothing and essentials when packing Large cube: 13″ × 17″ × 3.25″, Medium: 11″ × 14.75″ × 3″, Small: 7.75″ × 11.25″ × 2″",
"feats": [
"Material: Polyester",
"Colour: Black",
"Lead time: ~14 days",
"MOQ 50 units"
],
"img": "assets/holiday/p023.jpg",
"img2": "https://cdn.store.link/products/store18473/bbxhsa-csun-0155.jpg?versionId=b1aLuhRDFgcVCVirA7RsvOYBLsMJRsVE",
"tier": "Elite"
},
{
"id": "h024",
"name": "travelXOXO Bounce Roll Top Backpack",
"cat": "Backpacks",
"brand": "travelXOXO",
"price": 1349.0,
"mrp": 2699,
"moq": 50,
"desc": "Minimalistic design with a wide-mouth zippered opening for easy access",
"longDesc": "Minimalistic design with a wide-mouth zippered opening for easy access Roll-top for maximum flexibility and additional storage Internal foam-padded laptop compartment fits a 15\" laptop Stylish and functional choice for everyday use Size: Cm 28 W x 40 H x 13 D rolled, Cm 28 W x 58 H x 13 D unrolled",
"feats": [
"Material: Polyester",
"Colour: Navy",
"Lead time: ~14 days",
"MOQ 50 units"
],
"badge": "Top Rated",
"icon": "⭐",
"img": "assets/holiday/p024.jpg",
"img2": "https://cdn.store.link/products/store18473/kwcwvz-roller%20backpacknavy%20%281%29.png?versionId=BxzSyosnaQqaGp_6fTc3eUinnwSKFbHa",
"tier": "Elite"
},
{
"id": "h025",
"name": "travel XOXO Flight Crossbody Sling Bag",
"cat": "Travel Extreme",
"brand": "travelXOXO",
"price": 999.0,
"mrp": 1679,
"moq": 50,
"desc": "Made from durable 300D Ripstop fabric using 100% recycled polyester with PU coating.",
"longDesc": "Made from durable 300D Ripstop fabric using 100% recycled polyester with PU coating. Fabric is sourced from pre-consumer waste, making it environmentally responsible. Side zipper provides quick access to a padded interior sleeve suitable for tablets, e-readers, etc. Ambidextrous, adjustable strap allows the bag to be worn over either shoulder, across the chest, or on the back. Tricot-lined top pocket offers scratch protection for phones or sunglasses. Soft satin front zip pocket includes a key keeper for added convenience. Roomy main compartment accommodates everyday essentials. Stylish yet functional design makes it a versatile and favorite everyday sling bag.",
"feats": [
"Material: Polyester",
"Colour: Black",
"Lead time: ~21 days",
"MOQ 50 units"
],
"img": "assets/holiday/p025.jpg",
"img2": "https://cdn.store.link/products/store18473/-62zae-csun-1707.jpg?versionId=WRRRALBZtwG35O37TKSWf45uT1nNroTx",
"tier": "Signature"
},
{
"id": "h026",
"name": "travelXOXO Neoprene Everyday Tote Bag",
"cat": "Totes & Slings",
"brand": "travelXOXO",
"price": 1599.0,
"mrp": 2709,
"moq": 25,
"desc": "Made from 600D TPU coated rPET and neoprene using recycled materials",
"longDesc": "Made from 600D TPU coated rPET and neoprene using recycled materials Spacious open cavity fits towels and large beach essentials Interior water-resistant zippered pocket for organized storage Versatile carry options with padded grab handles and fixed shoulder straps",
"feats": [
"Material: R-Pet",
"Colour: Black",
"Lead time: ~14 days",
"MOQ 25 units"
],
"img": "assets/holiday/p026.jpg",
"img2": "https://cdn.store.link/products/store18473/lo4jee-csun-1580.jpg?versionId=4jTPU8005l_sboXwvlsd67css6xAAhl7",
"tier": "Prestige"
},
{
"id": "h027",
"name": "travelXOXO Weekender Duffle Bag",
"cat": "Duffles",
"brand": "travelXOXO",
"price": 2299.0,
"mrp": 3749,
"moq": 50,
"desc": "Essential overnight bag designed with a clean and contemporary look, combining style with everyday…",
"longDesc": "Essential overnight bag designed with a clean and contemporary look, combining style with everyday functionality. Features a spacious main compartment that offers ample room for clothing, tech accessories, and travel essentials. Ideal for work trips, short business travel, or weekend getaways. Equipped with a coated zip closure that provides added water resistance to help keep your belongings dry. Durable construction ensures reliable performance for frequent travel use. Dimensions approximately H27 x D26.5 x W52 cm, offering generous storage space. 36-liter capacity makes it suitable for organized and convenient packing.",
"feats": [
"Colour: Grey",
"Lead time: ~14 days",
"MOQ 50 units"
],
"badge": "Top Rated",
"icon": "⭐",
"img": "assets/holiday/p027.jpg",
"img2": "https://cdn.store.link/products/store18473/29egmd-travelxoxo-weekender-duffel.jpg?versionId=3OdA0xPmIGEBWdJO30dUim.r9vfyvE7C",
"tier": "Supreme"
},
{
"id": "h028",
"name": "SOIL Recharge Lunch Bag",
"cat": "Home Essentials",
"brand": "SOIL",
"price": 649.0,
"mrp": 1049,
"moq": 25,
"desc": "Lined with thick eco-friendly food-grade aluminum foil",
"longDesc": "Lined with thick eco-friendly food-grade aluminum foil Interior padded with 5mm thick insulation pearl foam Outer layer made from 300D water-resistant matte fabric Leakproof and freezable cooler bag suitable for office, school, picnic, or beach Adjustable shoulder strap for easy carrying Includes 1 front zipper pocket for keys, cards, etc. Comes with 2 mesh pockets for additional storage Size: 10 x 6.5 x 8 inches",
"feats": [
"Material: R-Pet",
"Colour: Grey",
"Lead time: ~14 days",
"MOQ 25 units"
],
"img": "assets/holiday/p028.jpg",
"img2": "https://cdn.store.link/products/store18473/q0tdz7-csun-0805.jpg?versionId=xuTjrP5EvKXSKJrCauuEiUQh9PvE6Tbl",
"tier": "Signature"
},
{
"id": "h029",
"name": "OMG Two Tone Twill Cap",
"cat": "Headwear",
"brand": "OMG",
"price": 979.0,
"mrp": null,
"moq": 25,
"desc": "6-panel design with a two-tone color scheme",
"longDesc": "6-panel design with a two-tone color scheme Eyelets, button, and beak in contrasting color for added appeal Beak features four rows of stitching for durability Made from 100% brushed cotton twill for a soft and comfortable feel Structured design maintains shape Closure type: Hook and loop (Velcro)",
"feats": [
"Material: Cotton",
"Colour: Beige With Black",
"Lead time: ~7 days",
"MOQ 25 units"
],
"img": "assets/holiday/p029.jpg",
"img2": "https://cdn.store.link/products/store18473/9gwhuu-csun-0695.jpg?versionId=HO9wJktCRRwyY973TgZDZVF_TqcCjy8w",
"tier": "Signature"
},
{
"id": "h030",
"name": "OMG Back Mesh Cap",
"cat": "Headwear",
"brand": "OMG",
"price": 729.0,
"mrp": null,
"moq": 25,
"desc": "Adjustable closure with Velcro / hook and loop for a secure fit",
"longDesc": "Adjustable closure with Velcro / hook and loop for a secure fit Suitable for all-day wear during sports, travel, or leisure activities Material: Cooton With Nylon Mesh 6 Panel",
"feats": [
"Material: Cotton/Nylon",
"Colour: Red",
"Lead time: ~7 days",
"MOQ 25 units"
],
"img": "assets/holiday/p030.jpg",
"img2": "https://cdn.store.link/products/store18473/88bmwg-csun-0639.jpg?versionId=pxZiF6UiW0Fw1l2bN69HLwUymKo354pS",
"tier": "Signature"
},
{
"id": "h031",
"name": "OMG Supreme Cap",
"cat": "Headwear",
"brand": "OMG",
"price": 729.0,
"mrp": null,
"moq": 25,
"desc": "structured cap made from 100% cotton twill fabric",
"longDesc": "structured cap made from 100% cotton twill fabric Fabric: 100% cotton twill Closure: Hook and loop (Velcro)",
"feats": [
"Material: Cotton",
"Colour: Royal Blue",
"Lead time: ~7 days",
"MOQ 25 units"
],
"img": "assets/holiday/p031.jpg",
"img2": "https://cdn.store.link/products/store18473/hv2z7o-csun-0626.jpg?versionId=1qqqn5C8waNaquT_cKAh4EGaqhPNVz2g",
"tier": "Signature"
},
{
"id": "h032",
"name": "travelXOXO Base Camp Shoulder Duffle Bag - 5L",
"cat": "Duffles",
"brand": "travelXOXO",
"price": 899.0,
"mrp": 1499,
"moq": 25,
"desc": "Miniature version of the iconic Base Camp Duffel, designed for everyday use.",
"longDesc": "Miniature version of the iconic Base Camp Duffel, designed for everyday use. Compact 5-litre capacity makes it suitable for carrying everyday essentials. Durable construction designed to withstand regular use. Made with 300D recycled polyester tarpaulin for a strong and reliable exterior. Features an 840D recycled ballistic nylon boot with PU coating and a non-PFC durable water-repellent (DWR) finish. Water-repellent fabric helps provide protection from light moisture. Multiple carrying options offer versatility and convenience for everyday use. Nylon mesh lining provides a durable and lightweight interior. Compact dimensions: 10.5\" × 5.5\" × 5.5\" (26.7 × 14 × 14 cm). Lightweight design weighs approximately 300 g. Volume: 5 litres. Size: One Size. Made with recycled materials, combining everyday functionality with a more sustainable material choice.",
"feats": [
"Material: 900 D Polyester",
"Lead time: ~7 days",
"MOQ 25 units"
],
"img": "assets/holiday/p032.jpg",
"img2": "https://cdn.store.link/products/store18473/jfruxv-base%20camp%E2%84%A2%20duffel%20shoulder%20bag3%20%282%29.png?versionId=lrepNNwSVbiDigz04p_xzSHFq7.eGvpf",
"tier": "Signature"
},
{
"id": "h033",
"name": "travelXOXO Saba Sling",
"cat": "Totes & Slings",
"brand": "travelXOXO",
"price": 1399.0,
"mrp": 2299,
"moq": 25,
"desc": "Durable hard cotton canvas exterior offers a rugged look and long-lasting performance.",
"longDesc": "Durable hard cotton canvas exterior offers a rugged look and long-lasting performance. Nylon interior lining provides added durability and protects stored belongings. Spacious main compartment accommodates daily essentials with ease. Includes a detachable inner pouch for convenient organization of smaller items. Premium YKK® metal zipper ensures smooth operation and reliable closure. Technical nylon webbing handles provide a comfortable and secure grip. Reinforced construction enhances strength for everyday use. Designed for work, travel, shopping, and daily commuting. Combines functionality, durability, and modern styling for versatile everyday use. Bag dimensions: 45 × 13 × 33.5 cm. Detachable pouch dimensions: 9.5 × 18 cm.",
"feats": [
"Material: cotton canvas , Nylon",
"Colour: Black",
"Lead time: ~14 days",
"MOQ 25 units"
],
"badge": "Top Rated",
"icon": "⭐",
"img": "assets/holiday/p033.jpg",
"img2": "https://cdn.store.link/products/store18473/oze04u-arthefact-saba-sling-bag---blacka.jpg?versionId=mUppt2_i1qB69k.FpRlCPJpZtSpC54x.",
"tier": "Elite"
},
{
"id": "h034",
"name": "Portronics Luxcell Wireless Mini 10K",
"cat": "Gadget & Tech",
"brand": "Portronics",
"price": 1880.0,
"mrp": 3999,
"moq": 25,
"desc": "Compact 10,000mAh power bank with 15W MagSafe wireless charging for compatible Qi-enabled smartphones and…",
"longDesc": "Compact 10,000mAh power bank with 15W MagSafe wireless charging for compatible Qi-enabled smartphones and accessories. Supports up to 22.5W fast wired charging through USB-A and USB Type-C Power Delivery (PD) ports for quick and efficient charging. Dual output ports allow simultaneous charging of multiple devices, while the USB Type-C port also supports fast input for convenient recharging. Strong magnetic alignment securely attaches to compatible devices, enabling hassle-free wireless charging on the go. LED battery indicator displays the remaining power level, allowing you to monitor battery status with ease. Broad compatibility with smartphones, tablets, earbuds, smartwatches, Bluetooth speakers, neckbands, and other USB-powered devices. Ultra-compact, lightweight design with a premium finish fits easily into pockets, handbags, or backpacks for effortless portability. BIS-certified with advanced safety protection against short circuits, overheating, overvoltage, and overcharging for reliable everyday use. Includes a USB Type-C to Type-C charging cable for added convenience and immediate use",
"feats": [
"Colour: Black",
"Lead time: ~14 days",
"MOQ 25 units"
],
"img": "assets/holiday/p034.jpg",
"img2": "https://cdn.store.link/products/store18473/90t3yo-62.png?versionId=qZpOLWuDwgTct8rVD0mFSB1lITH5eC9a",
"tier": "Prestige"
},
{
"id": "h035",
"name": "Fur Jaden Crossbody Sling Bag (MW65)",
"cat": "Totes & Slings",
"brand": "Fur Jaden",
"price": 1517.0,
"mrp": 2500,
"moq": 25,
"desc": "Premium lightweight fabric construction, water‑resistant and durable",
"longDesc": "Premium lightweight fabric construction, water‑resistant and durable Ventilated padded shoulder strap for comfort during use Airflow‑optimized mesh back panel for ergonomic support Dedicated padded compartment designed for tablets Easy access front pockets for essentials and quick storage High quality zippers ensuring reliability and smooth operation Available in two color options: Midnight Black and Space Grey",
"feats": [
"Material: Premium Fabric Light Weight & Water Resistnace",
"Colour: Midnight Black",
"Lead time: ~14 days",
"MOQ 25 units"
],
"img": "assets/holiday/p035.jpg",
"img2": "https://cdn.store.link/products/store18473/luwjaf-fur%20jaden%20crossbody%20sling%20bag%20%28mw65%29.png?versionId=YLQY63EZmXBH3pcecGviULNR9bHI80Tk",
"tier": "Prestige"
},
{
"id": "h036",
"name": "FurJaden 30L Travel Duffle",
"cat": "Duffles",
"brand": "Fur Jaden",
"price": 1409.0,
"mrp": 2500,
"moq": 25,
"desc": "30-litre capacity provides ample space for clothing, travel essentials, gym gear, and everyday belongings.",
"longDesc": "30-litre capacity provides ample space for clothing, travel essentials, gym gear, and everyday belongings. Crafted from sustainable vegan leather for a stylish and more environmentally conscious choice. Quilted front panel adds a distinctive texture and premium visual appeal. Antique-finish hardware enhances the sophisticated and timeless look. Padded base protection helps provide added durability and stability during use. Spacious and versatile design makes it suitable for travel, weekend getaways, gym sessions, and everyday use. Combines functional storage with a refined and contemporary aesthetic. Available in Black, Forest Green, and Tan colour options.",
"feats": [
"Material: Vegan Leather",
"Colour: Green",
"Lead time: ~14 days",
"MOQ 25 units"
],
"img": "assets/holiday/p036.jpg",
"img2": "https://cdn.store.link/products/store18473/q79o9x-30l%20travel%20duffle.png?versionId=bhoBFngaUmjEfZRkaHPHcRmOcJCOEFPB",
"tier": "Elite"
},
{
"id": "h037",
"name": "Rare Rabbit Unisex Hoodie",
"cat": "Jackets & Hoodies",
"brand": "Rare Rabbit",
"price": 2500.0,
"mrp": 3999,
"moq": 25,
"desc": "Product: Hoodie",
"longDesc": "Product: Hoodie Colour: Black Melange Type: Unisex Material: 60% Cotton, 40% Polyester Sizes: XS, S, M, L, XL, XXL, 3XL, 4XL",
"feats": [
"Material: Cotton, Polyester",
"Colour: Black Melange",
"Sizes: XS, S, M, L, XL, XXL, 3XL, 4XL",
"Lead time: ~21 days",
"MOQ 25 units"
],
"img": "assets/holiday/p037.jpg",
"img2": "https://cdn.store.link/products/store18473/m6m860-rare-rabbit-hoodie-black-melange.jpg?versionId=_tVsS8cQMoVRlu.2H4G24DW_qh5FxbvG",
"tier": "Supreme"
},
{
"id": "h038",
"name": "Oblique Mystique",
"cat": "Duffles",
"brand": "Oblique",
"price": 2249.0,
"mrp": 3950,
"moq": 25,
"desc": "MYSTIQUE is a durable and stylish duffle bag crafted for travel or gym use",
"longDesc": "MYSTIQUE is a durable and stylish duffle bag crafted for travel or gym use Detachable and adjustable long handle ensures personal comfort along with short handles Back zipper pocket provides quick access to essentials Dedicated shoe pouch inside keeps footwear separate from clothes Coated polyester construction adds resilience and water resistance Quick access and trolley strap features enhance convenience during journeys Dimensions of 34 cm height, 43 cm length, and 23 cm width balance spaciousness with portability Weighs 830 gms, offering sturdiness while remaining practical Available in sleek blue finish combining style, resilience, and functionality",
"feats": [
"Material: Coated Polyester",
"Colour: Blue",
"Lead time: ~14 days",
"MOQ 25 units"
],
"badge": "Top Rated",
"icon": "⭐",
"img": "assets/holiday/p038.jpg",
"img2": "https://cdn.store.link/products/store18473/7cra9s-mystic.png?versionId=cP1Gq99QFj2CpXaUi_F4Z18w1IY5DGlj",
"tier": "Supreme"
},
{
"id": "h039",
"name": "Oblique FIR - Jute Bag",
"cat": "Totes & Slings",
"brand": "Oblique",
"price": 549.0,
"mrp": 615,
"moq": 25,
"desc": "Natural jute blended with cotton material",
"longDesc": "Natural jute blended with cotton material Cotton webbing handle Size: 16\" width x 11.75\" height x 5\" depth Handle length: 16\" Top closure: Elastic with button",
"feats": [
"Material: Jute Blended With Cotton",
"Colour: Brown",
"Lead time: ~14 days",
"MOQ 25 units"
],
"img": "assets/holiday/p039.jpg",
"img2": "https://cdn.store.link/products/store18473/c3ynfd-oblique-fir.jpg?versionId=20CQU1uSoopPJRASaH4.ts4l0GbFQxnR",
"tier": "Signature"
},
{
"id": "h040",
"name": "OMG Rib Beanie",
"cat": "Headwear",
"brand": "OMG",
"price": 449.0,
"mrp": 1499,
"moq": 25,
"desc": "Sustainably crafted from 100% recycled polyester acrylic knit",
"longDesc": "Sustainably crafted from 100% recycled polyester acrylic knit Soft, warm, and durable construction for cold-weather comfort Classic 9\" cuffed design for a secure and snug fit Timeless warm white color for versatile styling Subtle debossed detailing adds a refined touch Lightweight yet insulating for everyday wear Ideal for casual outings, outdoor activities, and winter layering",
"feats": [
"Material: Polyester , Acrylic Knit",
"Colour: Black",
"Lead time: ~7 days",
"MOQ 25 units"
],
"img": "assets/holiday/p040.jpg",
"img2": "https://cdn.store.link/products/store18473/4q6hf7-beanie%20cap1.png?versionId=cXwUsTcY3KTxOVDwZzNbS9SnWMtxVE4d",
"tier": "Signature"
},
{
"id": "h041",
"name": "IRIS Shot Glass Scented Candle",
"cat": "Home Essentials",
"brand": "IRIS",
"price": 90.0,
"mrp": null,
"moq": 25,
"desc": "Premium scented candle crafted to create a warm, relaxing, and inviting ambiance.",
"longDesc": "Premium scented candle crafted to create a warm, relaxing, and inviting ambiance. High-quality wax blend ensures a clean, even burn with a long-lasting fragrance. Lead-free wick delivers a safe, consistent, and smoke-minimized burning experience. Perfect for bedrooms, living rooms, dining tables, meditation, spas, and festive décor. Enhances the atmosphere with a soothing aroma, ideal for relaxation and unwinding. Stylish design complements modern and contemporary interior décor. Makes a thoughtful gift for birthdays, anniversaries, housewarmings, festive occasions, and corporate gifting. Reusable glass container can be repurposed after the candle is fully used. Suitable for logo branding, custom packaging, and premium gifting collections.",
"feats": [
"Material: Wax , Glass",
"Colour: Pink",
"Lead time: ~14 days",
"MOQ 25 units"
],
"img": "assets/holiday/p041.jpg",
"img2": "https://cdn.store.link/products/store18473/3-0onj-91.png?versionId=6Sonw4jSL8esjbntqFZmvvMrzPa4jqDS",
"tier": "Signature"
},
{
"id": "h042",
"name": "SOIL Notecard - Custom",
"cat": "Kit Busters",
"brand": "SOIL",
"price": 99.0,
"mrp": 129,
"moq": 25,
"desc": "Fun and playful custom notecard featuring a cute cartoon cat illustration",
"longDesc": "Fun and playful custom notecard featuring a cute cartoon cat illustration Cat design holding a coffee cup with the quote “Good days start with coffee and cat” Light aqua blue border with a large white space in the center for personalized messages Compact size, ideal for notes, gift tags, or small greetings Printed on premium paper for a smooth writing experience Whimsical and charming aesthetic perfect for cat lovers or casual stationery Can be used for personal notes, thank-you cards, or journaling Stackable set, neatly packaged for gifting or desk use Minimalist yet vibrant design that adds a touch of personality to your correspondence",
"feats": [
"Material: Paper",
"Colour: Custom",
"Lead time: ~7 days",
"MOQ 25 units"
],
"img": "assets/holiday/p042.jpg",
"img2": "https://cdn.store.link/products/store18473/9jj4ht-csun-1281.jpg?versionId=NXcCTSeEHW5Ofo.g.ie3otbGQZf_0sa8",
"tier": "Signature"
},
{
"id": "h043",
"name": "Smoor No added sugar Hazelnut Chocolate Nibbles",
"cat": "Food & Edibles",
"brand": "Smoor",
"price": 295.0,
"mrp": null,
"moq": 25,
"desc": "Premium roasted hazelnuts generously coated in rich, sugar-free dark chocolate for a satisfying gourmet treat.",
"longDesc": "Premium roasted hazelnuts generously coated in rich, sugar-free dark chocolate for a satisfying gourmet treat. Crafted with high-quality Indian estate cocoa, delivering a bold, smooth, and authentic chocolate flavor. No added sugar, making it a mindful indulgence without compromising on taste. Perfectly balances the crunchy texture of roasted hazelnuts with the richness of dark chocolate. Made with carefully selected ingredients for a clean, premium snacking experience. Ideal for festive gifting, corporate hampers, celebrations, or enjoying as an everyday indulgence. A delicious combination of premium nuts and dark chocolate for chocolate lovers seeking a refined, guilt-conscious treat.",
"feats": [
"Material: Food & Edibles",
"Colour: Custom",
"Lead time: ~7 days",
"MOQ 25 units"
],
"img": "assets/holiday/p043.jpg",
"img2": "https://cdn.store.link/products/store18473/eveh00-4.png?versionId=nfqRVNwUVBwJmg3N97iysl1SoRRFgoWw",
"tier": "Signature"
},
{
"id": "h044",
"name": "PEANUT BUTTER CHOCO CUPS PACK OF 8",
"cat": "Food & Edibles",
"brand": "Smoor",
"price": 595.0,
"mrp": null,
"moq": 25,
"desc": "Premium chocolate gift box featuring indulgent chocolate shells with a rich and creamy peanut butter filling.",
"longDesc": "Premium chocolate gift box featuring indulgent chocolate shells with a rich and creamy peanut butter filling. Expertly crafted to deliver a delightful balance of smooth chocolate and luscious peanut butter in every bite. Made with high-quality ingredients for a rich, satisfying, and memorable gourmet experience. Elegantly presented, making it a thoughtful choice for festive celebrations and special occasions. Perfect for sharing with family, friends, colleagues, and clients during festive gatherings. Ideal for corporate gifting, festive hampers, employee appreciation, client gifts, and holiday celebrations. A delicious festive treat that adds warmth, sweetness, and indulgence to every celebration.",
"feats": [
"Material: Food & Edibles",
"Colour: Custom",
"Lead time: ~7 days",
"MOQ 25 units"
],
"img": "assets/holiday/p044.jpg",
"img2": "https://cdn.store.link/products/store18473/5p6kj4-3.png?versionId=iiNXAwrXWU7n_SQdRjxWbMlq5yEvydMN",
"tier": "Signature"
},
{
"id": "h045",
"name": "Wonderchef Regalia Milk Frother",
"cat": "Home Essentials",
"brand": "Wonderchef",
"price": 900.0,
"mrp": null,
"moq": 25,
"desc": "Creates rich, creamy milk froth in seconds, adding a professional touch to lattes, cappuccinos,…",
"longDesc": "Creates rich, creamy milk froth in seconds, adding a professional touch to lattes, cappuccinos, macchiatos, and hot chocolate. Enhances the texture and flavour of coffee-based beverages by aerating milk for a smooth, velvety finish. Features a low-noise design for quiet and convenient operation. Powered by AA batteries, with a sleek stainless steel body and whisk for efficient frothing. Offers versatile functionality for preparing lassi, cold coffee, protein shakes, and yoghurt, as well as whipping cream and beating eggs. Designed for simple, one-handed operation, delivering frothy results in just 20–30 seconds. Easy to clean by rinsing the whisk under running water or briefly operating the frother with the whisk immersed in water. Combines elegant Italian-inspired design with German quality standards for reliable performance and durability. Comes with a reliable Wonderchef warranty, subject to applicable terms and conditions.",
"feats": [
"Material: Stainless Steel",
"Colour: Navy Blue",
"Lead time: ~7 days",
"MOQ 25 units"
],
"badge": "Top Rated",
"icon": "⭐",
"img": "assets/holiday/p045.jpg",
"tier": "Signature"
},
{
"id": "h046",
"name": "Urban Gear Eye Mask Travel Passport Cover",
"cat": "Travel Extreme",
"brand": "Urban Gear",
"price": 72.0,
"mrp": 199,
"moq": 50,
"desc": "Urban Gear EYE MASK Travel Comfort Accessory",
"longDesc": "Urban Gear EYE MASK Travel Comfort Accessory Model UG-EM01 Soft and comfortable design Blocks unwanted light, suitable in any sleep position Stretchable strap for secure fit Available in Black (BK) Branding options: screen printing, DTF printing, embroidery (*conditions apply)",
"feats": [
"Colour: Black",
"Lead time: ~30 days",
"MOQ 50 units"
],
"img": "assets/holiday/p046.jpg",
"img2": "https://cdn.store.link/products/store18473/5i7u81-eye%20masj.png?versionId=VgB89FpDzBnxs7Tru8N405O8pUnaRQzV",
"tier": "Signature"
},
{
"id": "h047",
"name": "Fuzo Globetrotter Travel Kit",
"cat": "Travel Extreme",
"brand": "Fuzo",
"price": 125.0,
"mrp": 299,
"moq": 25,
"desc": "Perfect companion for travel, designed to hold essential items",
"longDesc": "Perfect companion for travel, designed to hold essential items Includes an inflatable travel neck pillow for comfort on-the-go Satin finish eye mask with elastic bands to block out sunlight Comes with ear plugs to reduce noise and enhance sleep quality Improves sleep depth and comfort during travel Compact and portable—easy to carry anywhere Ample space available for custom branding Dimensions: 16 x 11 x 3.5 cm Ideal for gifting, business travel, or personal use",
"feats": [
"Material: Poly Bag, Satin",
"Colour: Grey",
"Lead time: ~14 days",
"MOQ 25 units"
],
"badge": "Top Rated",
"icon": "⭐",
"img": "assets/holiday/p047.jpg",
"img2": "https://cdn.store.link/products/store18473/9lebqv-csun-0321.jpg?versionId=B04AgkvnXYOgXcuaMouBhJRMRn.7SIQ9",
"tier": "Signature"
},
{
"id": "h048",
"name": "Portronics Muffs M2 Bluetooth Headphone",
"cat": "Gadget & Tech",
"brand": "Portronics",
"price": 1500.0,
"mrp": 2499,
"moq": 25,
"desc": "Dual mode connectivity: Bluetooth 5.3 for wireless use or 3.5mm AUX port for wired connection",
"longDesc": "Dual mode connectivity: Bluetooth 5.3 for wireless use or 3.5mm AUX port for wired connection Massive 40-hour playtime; 10-minute fast charge provides up to 10 hours of playback Type-C charging port for quick and efficient charging Plush memory foam on earcups and headband ensures extended comfort Flexible and foldable design for portability and ease of storage Powerful 40mm drivers deliver enhanced bass and treble for an immersive audio experience Built-in mic allows clear voice calls and communication",
"feats": [
"Material: Plastic",
"Colour: Black",
"Lead time: ~14 days",
"MOQ 25 units"
],
"img": "assets/holiday/p048.jpg",
"img2": "https://cdn.store.link/products/store18473/a5wmzp-csun-0403.jpg?versionId=PB9DhDRUXGR0OEnFbnUeoOYX_WTwN955",
"tier": "Elite"
},
{
"id": "h049",
"name": "SOIL 6-IN-1 Game Set",
"cat": "Home Essentials",
"brand": "SOIL",
"price": 3749.0,
"mrp": 6899,
"moq": 25,
"desc": "Includes six classic games for endless entertainment.",
"longDesc": "Includes six classic games for endless entertainment. Chess: A strategic two-player game of skill. Othello: A strategy game with black and white pieces. Knots and Crosses: A timeless two-player game. Fitness Dice: Adds fun to workouts with exercise names and reps. Standard Deck of 52 Cards: Versatile for multiple card games. UNO: A fun and fast-paced shedding-type card game.",
"feats": [
"Material: Wood",
"Colour: Beige",
"Lead time: ~14 days",
"MOQ 25 units"
],
"img": "assets/holiday/p049.jpg",
"img2": "https://cdn.store.link/products/store18473/k6go5p-csun-0898.png?versionId=sNag3yTbXCzJZC8OHV668D51mEbQfZ8v",
"tier": "Pinnacle"
},
{
"id": "h050",
"name": "Catan Strategy Board Game",
"cat": "Games & Toys",
"brand": "toys Heaven",
"price": 667.0,
"mrp": 899,
"moq": 25,
"desc": "Engaging strategy board game focused on resource management, trading, settlement building, and expansion.",
"longDesc": "Engaging strategy board game focused on resource management, trading, settlement building, and expansion. Players collect resources, negotiate trades, and make tactical decisions to earn victory points. Modular board layout creates a different gameplay experience each time, offering high replay value. Encourages strategic thinking, planning, negotiation, communication, and decision-making skills. Durable cardboard construction and quality game components are designed for repeated play. Suitable for players aged 10 years and above, including teenagers, adults, and families. Ideal for family game nights, parties, gatherings, holidays, birthdays, and casual get-togethers. Provides an interactive and competitive gaming experience for both beginners and experienced strategy-game enthusiasts. Makes an engaging gift for board game lovers and an excellent addition to any game collection.",
"feats": [
"Material: Card Board",
"Colour: Multicolor",
"Lead time: ~14 days",
"MOQ 25 units"
],
"img": "assets/holiday/p050.jpg",
"img2": "https://cdn.store.link/products/store18473/e2ag19-73.png?versionId=jPGeGYKLyGRdz0Bfb775zA7.MRRptAbG",
"tier": "Signature"
},
{
"id": "h051",
"name": "SOIL Set of 3 Wooden Cubes",
"cat": "Games & Toys",
"brand": "SOIL",
"price": 1199.0,
"mrp": null,
"moq": 25,
"desc": "Crafted from smooth natural wood with a polished finish and rounded corners for a refined look.",
"longDesc": "Crafted from smooth natural wood with a polished finish and rounded corners for a refined look. Features crisp laser-engraved minute markings on each side for easy time tracking. Made with high-quality natural wood construction for durability and a premium feel. Compact dimensions of approximately 5.5 × 5.5 × 5.5 cm. Suitable for productivity tracking, study sessions, focused work, and desk use. Adds a warm, minimalist touch to workspaces and office desks. Ideal for corporate gifting, employee rewards, and professional desk accessories.",
"feats": [
"Material: Wood",
"Colour: SOIL",
"Lead time: ~7 days",
"MOQ 25 units"
],
"img": "assets/holiday/p051.jpg",
"img2": "https://cdn.store.link/products/store18473/hp8ahh-set%20of%203%20wooden%20cubes.png?versionId=HYcZL0qeSv2bx1O3W4ABSo3udvgq9RZC",
"tier": "Elite"
},
{
"id": "h052",
"name": "ET-TU Basic Bonded Fleece Jacket II",
"cat": "Jackets & Hoodies",
"brand": "ET-TU",
"price": 6249.0,
"mrp": null,
"moq": 500,
"desc": "Made from 100% polyester jersey bonded with 100% polyester microfleece for warmth and comfort.",
"longDesc": "Made from 100% polyester jersey bonded with 100% polyester microfleece for warmth and comfort. Center front reversed coil zipper with semi-autolock pull tab for secure closure. Self-fabric banded cuffs and waistband for a snug fit. Front zippered pockets for added convenience. Lower pockets with contrast reverse coil zippers for extra style and functionality.",
"feats": [
"Material: Polyester Jersey , Polyester Microfleece",
"Colour: Black",
"Sizes: XS, S, M, L, XL, 2XL, 3XL",
"Lead time: ~30 days",
"MOQ 500 units"
],
"badge": "Top Rated",
"icon": "⭐",
"img": "assets/holiday/p052.jpg",
"img2": "https://cdn.store.link/products/store18473/8sxlsn-csun-1523_xs.png?versionId=Obrb8_sj6UiDSy5lw6akwC7C5tQISlmh",
"tier": "Pinnacle"
},
{
"id": "h053",
"name": "FUNSKOOL Jenga-Truth or Dare (Multicolor)",
"cat": "Toy & Plush",
"brand": "FUNSKOOL",
"price": 849.0,
"mrp": null,
"moq": 25,
"desc": "Exciting block-stacking game with a fun Truth or Dare twist that adds excitement and laughter to every round.",
"longDesc": "Exciting block-stacking game with a fun Truth or Dare twist that adds excitement and laughter to every round. Includes color-coded blocks, with red blocks featuring dares and green blocks featuring truth questions for interactive gameplay. Encourages concentration, strategic thinking, hand-eye coordination, and fine motor skill development. Players carefully remove and stack blocks while trying to keep the tower stable, creating a fun and engaging challenge. Promotes social interaction, teamwork, communication, and friendly competition among players. Suitable for children, families, and groups, making it ideal for parties, game nights, and indoor entertainment. Crafted from durable materials for repeated play and long-lasting enjoyment. A perfect gift for birthdays, holidays, and special occasions, offering hours of interactive fun for players of all ages.",
"feats": [
"Material: Wood",
"Colour: Custom",
"Lead time: ~14 days",
"MOQ 25 units"
],
"img": "assets/holiday/p053.jpg",
"img2": "https://cdn.store.link/products/store18473/8xwnda-24.png?versionId=BUO6RWu0TLGrIotVQsBvAHkJ6OU8aCNG",
"tier": "Signature"
},
{
"id": "h054",
"name": "PHOOL MARBLE JALI AROMA OIL BURNER",
"cat": "Home Essentials",
"brand": "Phool",
"price": 3209.0,
"mrp": 3425,
"moq": 25,
"desc": "A thoughtfully curated gift box inspired by the mysterious charm of regal secrets and rich Indian heritage.",
"longDesc": "A thoughtfully curated gift box inspired by the mysterious charm of regal secrets and rich Indian heritage. Includes an elegant Marble Jali Aroma Oil Burner designed to add a royal and sophisticated touch to any space. Comes with Phool Diffuser Oil – Soumya Chandan (10ml) featuring a soothing and calming sandalwood fragrance. Includes Phool Diffuser Oil – Basant (10ml) with a refreshing and uplifting aroma. Contains 4 T-light candles to beautifully illuminate and enhance the ambiance of any room. Designed as a beautiful box of lights that creates a warm, inviting, and serene atmosphere. Showcases intricate artistry and craftsmanship inspired by traditional Indian aesthetics. Functions as both a luxurious gifting option and an elegant home décor piece. Perfect for festive gifting, celebrations, housewarming occasions, or creating a calming environment.",
"feats": [
"Material: Esssential Oil",
"Colour: Multicolor",
"Lead time: ~14 days",
"MOQ 25 units"
],
"img": "assets/holiday/p054.jpg",
"img2": "https://cdn.store.link/products/store18473/olm8si-inar-002.png?versionId=3gmgQodKZKTPLn_pqchfthbzhoc7AFo0",
"tier": "Pinnacle"
},
{
"id": "h055",
"name": "Oodai Treasure Chest | Gifting",
"cat": "Home Essentials",
"brand": "Oodai",
"price": 864.0,
"mrp": 990,
"moq": 25,
"desc": "Curated set of 3 hand towels featuring a blend of textures, colors, and contemporary designs.",
"longDesc": "Curated set of 3 hand towels featuring a blend of textures, colors, and contemporary designs. Includes 1 Glow Sketchbook Cotton Hammam Terry Hand Towel with a soft and absorbent terry texture. Includes 1 Terracotta Cotton-Bamboo Waffle Hand Towel with a textured waffle finish. Includes 1 Teal Cotton-Bamboo Waffle Hand Towel featuring a complementary textured design. Cotton and cotton-bamboo construction provides a soft, comfortable, and absorbent feel. Variety of colors and textures adds a stylish touch to bathrooms and living spaces. Compact and practical for everyday use, travel, guest bathrooms, or gifting. Thoughtfully curated as a versatile gifting set for birthdays, housewarming, festive occasions, and corporate gifting.",
"feats": [
"Material: Cotton Bamboo",
"Colour: Multicolor",
"Lead time: ~14 days",
"MOQ 25 units"
],
"img": "assets/holiday/p055.jpg",
"img2": "https://cdn.store.link/products/store18473/ebfft9-35.png?versionId=fK1Vyy6qhhgWQHl3X7YIp4AGuukBfw0l",
"tier": "Signature"
},
{
"id": "h056",
"name": "Universal 5 IN 1 Multi USB Connector",
"cat": "Gadget & Tech",
"brand": "Sync",
"price": 675.0,
"mrp": 1125,
"moq": 50,
"desc": "Plastic USB charging cable with micro-USB, dual-tip micro, Apple® 8-pin, and Type-C connectors",
"longDesc": "Plastic USB charging cable with micro-USB, dual-tip micro, Apple® 8-pin, and Type-C connectors Designed to charge multiple mobile devices simultaneously Plugs into an adequately powered USB port Suitable for charging several electronic devices at once Compatibility may vary and may not be ideal for all mobile or tablet devices Acts as a universal adapter essential for everyday device charging needs Helps ensure safe usage of multiple electronic devices Size: 3/4\" W × 5-3/4\" H",
"feats": [
"Material: Plastic",
"Colour: Black",
"Lead time: ~21 days",
"MOQ 50 units"
],
"img": "assets/holiday/p056.jpg",
"img2": "https://cdn.store.link/products/store18473/jrhv55-csun-0324.jpg?versionId=5kQNJl_emaNoz_4KTDZQM7sBFjRKc82W",
"tier": "Signature"
},
{
"id": "h057",
"name": "Zeb Heat Buster 200",
"cat": "Gadget & Tech",
"brand": "Zebronics",
"price": 1017.0,
"mrp": 1499,
"moq": 25,
"desc": "Delivers up to 12 hours of backup for extended and convenient use.",
"longDesc": "Delivers up to 12 hours of backup for extended and convenient use. Features 5 adjustable speed modes to customize airflow according to your preference. Equipped with an LED display with a battery percentage indicator for easy monitoring of remaining power. Built-in 3600mAh rechargeable battery provides reliable and convenient cordless operation. High-speed performance of up to 5000 RPM for efficient cooling and airflow. Generates powerful airflow of up to 5.9 m/s for quick and effective cooling. Powered by a high-speed brushless motor for smooth and efficient performance. Lightweight and portable design makes it easy to carry and use anywhere. Offers quiet operation for a more comfortable user experience. Convenient for personal cooling and makeup application. Supports Type-C charging for easy and versatile recharging.",
"feats": [
"Material: Plastic",
"Colour: Blue",
"Lead time: ~7 days",
"MOQ 25 units"
],
"badge": "Top Rated",
"icon": "⭐",
"img": "assets/holiday/p057.jpg",
"img2": "https://cdn.store.link/products/store18473/mso8hj-zebronics.png?versionId=vFJaZEGZRIQp_mHzaX0u8eLuvQq4haLJ",
"tier": "Elite"
},
{
"id": "h058",
"name": "Aerosync Maglite Wireless Power Bank",
"cat": "Gadget & Tech",
"brand": "Ambrane",
"price": 2399.2,
"mrp": 2999,
"moq": 25,
"desc": "Wireless power bank with MagSafe-compatible charging for iPhone and Qi-enabled devices",
"longDesc": "Wireless power bank with MagSafe-compatible charging for iPhone and Qi-enabled devices 10,000 mAh capacity provides reliable power for charging devices on the go 22W BoostedSpeed™ technology enables faster charging with reduced waiting time Built-in stand allows convenient hands-free viewing and streaming while charging Type-C port supports fast wired charging and broad device compatibility Compatible with a range of devices, including smartphones, AirPods, iPads, Android devices, and Lightning-enabled devices Compact and portable design makes it easy to carry while travelling or commuting Sleek matte finish adds a modern and premium look Convenient wireless and wired charging options for versatile everyday use Ideal for travel, work, corporate gifting, and tech-focused promotional kits",
"feats": [
"Colour: Blue",
"Lead time: ~14 days",
"MOQ 25 units"
],
"img": "assets/holiday/p058.jpg",
"img2": "https://cdn.store.link/products/store18473/wpg2co-aerosync%20maglite%20wireless%20power%20bank.png?versionId=.L3okPmRfV9QU2niJiuZwpd0FsUrR1cR",
"tier": "Supreme"
},
{
"id": "h059",
"name": "STRÖM GO v2",
"cat": "Gadget & Tech",
"brand": "Nukk",
"price": 3727.0,
"mrp": 4499,
"moq": 25,
"desc": "Compact and travel-friendly garment steamer designed to keep outfits fresh, smooth, and crease-free…",
"longDesc": "Compact and travel-friendly garment steamer designed to keep outfits fresh, smooth, and crease-free wherever you go. Rapid 30-second heat-up time delivers quick and convenient wrinkle removal with minimal waiting. Produces up to 20 g of steam per minute for powerful and efficient crease-busting performance. Supports both horizontal and vertical steaming, allowing it to function seamlessly as a garment steamer and iron. Equipped with a 120 ml water tank, providing up to 10 minutes of continuous steaming on a single fill. Lightweight and portable design makes it ideal for business travel, holidays, events, and everyday wardrobe care. A versatile travel essential that combines powerful performance with compact convenience.",
"feats": [
"Material: ABS",
"Colour: Serene Grey",
"Lead time: ~14 days",
"MOQ 25 units"
],
"badge": "Top Rated",
"icon": "⭐",
"img": "assets/holiday/p059.jpg",
"img2": "https://cdn.store.link/products/store18473/ven9i5-nuuk.png?versionId=5UwP9rFW1hEftnMqniDDeChJF_WRMzwe",
"tier": "Pinnacle"
},
{
"id": "h060",
"name": "OMG Classic Cap",
"cat": "Headwear",
"brand": "OMG",
"price": 799.0,
"mrp": null,
"moq": 25,
"desc": "structured cap made from 100% cotton twill fabric",
"longDesc": "structured cap made from 100% cotton twill fabric Value-priced style with a high-profile design Available in a wide range of colors to match team uniforms or branding needs",
"feats": [
"Material: Cotton",
"Colour: White",
"Lead time: ~7 days",
"MOQ 25 units"
],
"img": "assets/holiday/p060.jpg",
"img2": "https://cdn.store.link/products/store18473/6wjxau-csun-0632.jpg?versionId=KVZvw2XoSlk7T6z6MkhD_x7JulwDoB4V",
"tier": "Signature"
},
{
"id": "h061",
"name": "Regal Nutri Blender with 3 Jars, 400 Watts Personal Blender with 100% Copper Motor",
"cat": "Home Essentials",
"brand": "Agaro",
"price": 2792.0,
"mrp": 3490,
"moq": 25,
"desc": "Blends, chops, grinds and purees ingredients for smoothies, juices, milkshakes, cold coffee, chutneys and…",
"longDesc": "Blends, chops, grinds and purees ingredients for smoothies, juices, milkshakes, cold coffee, chutneys and more. Powered by a 400W motor with 100% copper winding for efficient performance and durability (220–240V, 50Hz). Suitable for everyday kitchen preparations, including smoothies, dosa batter, chutneys and sauces. Features a dual-blade system comprising 2-leaf cross blades and 4-leaf serrated stainless steel blades for efficient blending and grinding. Includes 3 BPA-free jars with capacities of 700ml, 500ml and 300ml, along with a sipper lid, sieve lid, resealable lid and blade bases for versatile use and convenience.",
"feats": [
"Colour: Red",
"Lead time: ~7 days",
"MOQ 25 units"
],
"img": "assets/holiday/p061.jpg",
"tier": "Pinnacle"
},
{
"id": "h062",
"name": "HRX Force Urban 2.0",
"cat": "Travel Extreme",
"brand": "HRX",
"price": 2667.0,
"mrp": 10999,
"moq": 25,
"desc": "Durable hard-shell cabin trolley crafted from premium polycarbonate for superior impact resistance and…",
"longDesc": "Durable hard-shell cabin trolley crafted from premium polycarbonate for superior impact resistance and long-lasting performance. Spacious 48L capacity with two main compartments, a dedicated front laptop compartment, tablet pocket, and multiple organizer pockets for efficient packing. Interior features a soft lining, compression straps, and a mesh pocket to keep belongings secure and neatly organized. Equipped with 8 smooth-rolling spinner wheels for effortless 360° maneuverability across a variety of surfaces. Telescopic pull handle ensures comfortable handling and easy navigation during travel. Integrated number lock provides enhanced security and peace of mind while on the move. Water-resistant textured exterior helps protect belongings from light moisture and everyday wear. Compact cabin-size design with dimensions of 57 × 36 × 25 cm, making it suitable for most airline carry-on requirements. Weighing only 2.99 kg, it offers a lightweight yet sturdy travel solution for business and leisure trips.",
"feats": [
"Material: Polycarbonate",
"Colour: Silver",
"Lead time: ~7 days",
"MOQ 25 units"
],
"badge": "Top Rated",
"icon": "⭐",
"img": "assets/holiday/p062.jpg",
"img2": "https://cdn.store.link/products/store18473/denxwn-hrx-001.png?versionId=qj4YEeWyLoJm0mhYTemGvsaLzpcT58bM",
"tier": "Pinnacle"
},
{
"id": "h063",
"name": "travelXOXO Cabin Luggage Harness & Backpack",
"cat": "Travel Extreme",
"brand": "travelXOXO",
"price": 8249.0,
"mrp": 8250,
"moq": 25,
"desc": "Crafted from high-quality recycled nylon for enhanced durability and sustainability.",
"longDesc": "Crafted from high-quality recycled nylon for enhanced durability and sustainability. Functions as both a cabin luggage harness and a convertible backpack for versatile travel. Securely attaches to compatible cabin suitcases using adjustable fastening straps. Hidden, adjustable shoulder straps allow quick conversion into a comfortable backpack. Features multiple compartments for organized storage and easy access to travel essentials. Two spacious zippered pockets accommodate laptops up to 16 inches, documents, magazines, or other daily essentials. Non-slip silicone strips help keep the harness securely in place and maintain balance during transit. Lightweight construction ensures comfortable carrying throughout your journey. Premium black matte hardware adds a sleek, modern finish. Exterior crafted from recycled nylon with durable nylon webbing. Interior lined with recycled nylon for a premium and eco-conscious finish. Ideal for business travel, daily commuting, and frequent flyers seeking organized, hands-free convenience. Dimensions: 39 × 31 × 9 cm. Weight: 0.6 kg.",
"feats": [
"Material: Nylon",
"Colour: Black",
"Lead time: ~14 days",
"MOQ 25 units"
],
"badge": "Top Rated",
"icon": "⭐",
"img": "assets/holiday/p063.jpg",
"img2": "https://cdn.store.link/products/store18473/01fl1--image%20%2835%29.png?versionId=V_I6XY6YSyCrhB4rK8YZgU1up1hhgieo",
"tier": "Pinnacle"
},
{
"id": "h064",
"name": "Forest Essentials Sleep & Stress Relief Therapy Kit",
"cat": "Wellness",
"brand": "Forest Essentials",
"price": 2350.0,
"mrp": null,
"moq": 25,
"desc": "Includes a comprehensive Sleep & Stress Relief Therapy Kit featuring both Tranquil Sleep and Stress Relief…",
"longDesc": "Includes a comprehensive Sleep & Stress Relief Therapy Kit featuring both Tranquil Sleep and Stress Relief sprays. Formulated with pure essential oils of Geranium, Lavender, Nutmeg, and Sandalwood to promote a restful night's sleep. Utilizes steam-distilled essential oils from fragrant flowers to soothe the senses and stimulate the body's natural stress release. Features naturally distilled ingredients that work to de-stress the senses and effectively calm the mind. Contains specific aromatic notes designed to help relieve anxiety and quiet mental chatter. Provides a natural solution to induce deep, restorative sleep without the use of synthetic sedatives. Guaranteed free from harsh chemicals, parabens, and petrochemicals for a clean wellness experience. Presented in eco-friendly packaging to support environmental sustainability.",
"feats": [
"Material: Essential Oils",
"Lead time: ~14 days",
"MOQ 25 units"
],
"badge": "Top Rated",
"icon": "⭐",
"img": "assets/holiday/p064.jpg",
"img2": "https://cdn.store.link/products/store18473/lxpxxh-9761.png?versionId=HIvLQdiPOoHm78It5BPG4fydvydL.OfL",
"tier": "Supreme"
},
{
"id": "h065",
"name": "Meyaar Silicone Phone Sticky Grip",
"cat": "Gadget & Tech",
"brand": "Jaymir Enterprises",
"price": 129.0,
"mrp": 999,
"moq": 25,
"desc": "Made from durable, reusable silicone, these suction phone stickers attach securely to mirrors, glass,…",
"longDesc": "Made from durable, reusable silicone, these suction phone stickers attach securely to mirrors, glass, tiles and other smooth surfaces for hands-free viewing and video calls. Universally compatible with most mobile devices and phone cases, offering a versatile grip solution for everyday use. Features strong suction technology to keep the phone securely in place on compatible surfaces while allowing easy removal when needed. Ideal for watching videos, following recipes, video conferencing and taking selfies without holding the phone. Includes a value pack of 2 multicolour silicone suction phone stickers designed for repeated use.",
"feats": [
"Material: Silicone",
"Lead time: ~14 days",
"MOQ 25 units"
],
"img": "assets/holiday/p065.jpg",
"tier": "Signature"
},
{
"id": "h066",
"name": "Mattel Games UNO Cards Pack of 2",
"cat": "Home Essentials",
"brand": "Mattel Games",
"price": 150.0,
"mrp": 199,
"moq": 23,
"desc": "Exciting bluffing card game where players strategically deceive opponents to be the first to discard all…",
"longDesc": "Exciting bluffing card game where players strategically deceive opponents to be the first to discard all their cards. Players place cards face down and announce their play, while others decide whether to challenge the move or trust the claim. Successful bluffs help you stay ahead, while incorrect challenges or getting caught in a lie result in drawing additional cards. Retains the classic excitement of UNO while introducing a fun twist of strategy, deception, and quick decision-making. Features special graphic symbols on every card to support players with color vision deficiencies, making the game more inclusive. Suitable for 2 or more players aged 7 years and above, making it ideal for family game nights, parties, and group gatherings. Perfect for gifting, travel, vacations, and entertaining friends and family with fast-paced, interactive gameplay.",
"feats": [
"Material: Paper",
"Lead time: ~7 days",
"MOQ 23 units"
],
"img": "assets/holiday/p066.jpg",
"img2": "Retail",
"tier": "Signature"
},
{
"id": "h067",
"name": "AUGEN Pickleball Paddles Kit",
"cat": "Wellness",
"brand": "Augen",
"price": 1250.0,
"mrp": 3199,
"moq": 6,
"desc": "Complete pickleball set includes 2 high-performance paddles and 4 durable pickleball balls, making it…",
"longDesc": "Complete pickleball set includes 2 high-performance paddles and 4 durable pickleball balls, making it ideal for recreational and competitive play. Lightweight fiberglass paddles with a honeycomb core provide an excellent balance of power, control, and maneuverability. Ergonomic, non-slip grips ensure a comfortable and secure hold for extended playing sessions. Durable outdoor pickleball balls feature a wind-resistant design for consistent flight and reliable performance in various playing conditions. Suitable for players of all skill levels, from beginners to experienced enthusiasts, offering an enjoyable playing experience. Perfect for outdoor games in parks, gardens, driveways, sports courts, beaches, and community recreation areas. Encourages physical activity, coordination, reflexes, teamwork, and social interaction for players of all ages. Ideal for family game nights, friendly matches, fitness activities, and group recreation. A thoughtful gift for sports enthusiasts, families, and anyone looking to enjoy an active and engaging outdoor sport.",
"feats": [
"Material: Wood",
"Colour: Red",
"Lead time: ~14 days",
"MOQ 6 units"
],
"badge": "Top Rated",
"icon": "⭐",
"img": "assets/holiday/p067.jpg",
"img2": "Retail",
"tier": "Elite"
},
{
"id": "h068",
"name": "BOAT Stone 135 Portable Bluetooth Speaker",
"cat": "Gadget & Tech",
"brand": "boAt",
"price": 1595.0,
"mrp": 1990,
"moq": 25,
"desc": "Speaker Maximum Output Power: 5 Watts",
"longDesc": "Speaker Maximum Output Power: 5 Watts Connectivity Technology: Bluetooth, wireless Audio Output Mode: Surround Mounting Type: Hanging mount/Tabletop 5W RMS sound output for an engaging audio experience Supports TWS functionality to pair two Stone 135 speakers for dual impact Up to 11 hours of playtime per charge at 80% volume IPX4 rated for resistance against water and splashes Multiple connectivity options: Bluetooth, FM Mode, and TF Card Easy-to-access controls for playback, volume, and voice assistant activation Built-in mic supports hands-free calling",
"feats": [
"Colour: Blue",
"Lead time: ~14 days",
"MOQ 25 units"
],
"img": "assets/holiday/p068.jpg",
"img2": "https://cdn.store.link/products/store18473/yztfox-csun-0482.jpg?versionId=PREPklF8EvqPzGlcldBLOolnDqQew7J2",
"tier": "Prestige"
},
{
"id": "h069",
"name": "BOAT Stone 580 Portable Bluetooth Speaker",
"cat": "Gadget & Tech",
"brand": "boAt",
"price": 3995.0,
"mrp": 4990,
"moq": 25,
"desc": "Speaker Maximum Output Power: 12 Watts",
"longDesc": "Speaker Maximum Output Power: 12 Watts Connectivity Technology: Bluetooth, AUX, USB Audio Output Mode: Stereo Mounting Type: Tabletop Mount 12W RMS stereo sound for an immersive audio experience Supports TWS functionality to connect two Stone 580 speakers for double the sound IPX4 rated water and splash-resistant design for worry-free portability Up to 8 hours of playback on a single charge via Type-C charging at 60% volume Built-in FM radio for access to music and audio shows on the go Stylish LED lights enhance the party vibe",
"feats": [
"Colour: Black",
"Lead time: ~14 days",
"MOQ 25 units"
],
"img": "assets/holiday/p069.jpg",
"img2": "https://cdn.store.link/products/store18473/vko91d-csun-0497.jpg?versionId=x6u2GEMtdeY90LBH18OnAV6wPy7JN0Xn",
"tier": "Pinnacle"
},
{
"id": "h070",
"name": "JBL Go Essential",
"cat": "Gadget & Tech",
"brand": "JBL",
"price": 2825.0,
"mrp": 2999,
"moq": 25,
"desc": "Portable Bluetooth speaker with high-quality JBL sound",
"longDesc": "Portable Bluetooth speaker with high-quality JBL sound Offers up to 5 hours of playtime on a single charge IPX7 waterproof design makes it suitable for outdoor use, including poolside and parks Bluetooth 4.2 connectivity enables wireless streaming from phones, tablets, and other devices",
"feats": [
"Colour: Black",
"Lead time: ~14 days",
"MOQ 25 units"
],
"badge": "Top Rated",
"icon": "⭐",
"img": "assets/holiday/p070.jpg",
"img2": "https://cdn.store.link/products/store18473/pa9g4l-jbl-067.png?versionId=uUG8XyvkmHgWj9YFw0kM20I2qntf5RiL",
"tier": "Pinnacle"
},
{
"id": "h071",
"name": "JBL FLIP ESSENTIAL 2",
"cat": "Gadget & Tech",
"brand": "JBL",
"price": 6780.0,
"mrp": 9999,
"moq": 25,
"desc": "Portable speaker with bold, high-quality sound",
"longDesc": "Portable speaker with bold, high-quality sound Up to 10 hours of playtime IPX7 waterproof for durability Wireless Bluetooth streaming Made with recycled materials and eco-friendly design",
"feats": [
"Colour: Black",
"Lead time: ~14 days",
"MOQ 25 units"
],
"img": "assets/holiday/p071.jpg",
"img2": "https://cdn.store.link/products/store18473/g-8bnm-flip%20essential%202.png?versionId=2d.v2MPEG.daCeb3Kf0j9Mtzs9HOZYuX",
"tier": "Pinnacle"
},
{
"id": "h072",
"name": "REP - 24x7 Fitness Tracker",
"cat": "Gadget & Tech",
"brand": "Noise",
"price": 9999.0,
"mrp": null,
"moq": 25,
"desc": "Continuously tracks key body signals to provide insights into sleep, recovery and physical strain.",
"longDesc": "Continuously tracks key body signals to provide insights into sleep, recovery and physical strain. Helps you understand your body's readiness and make informed decisions about training intensity. Lightweight 27 g design for comfortable, all-day and overnight wear. Offers up to 10 days of battery life, making it suitable for training, travel and everyday use. Screen-free design keeps the focus on your activities without constant distractions. No subscription required, with access to your personal data from day one. Designed to support smarter training, better recovery and improved overall performance.",
"feats": [
"Material: Gadget & Tech",
"Colour: Black",
"Lead time: ~14 days",
"MOQ 25 units"
],
"badge": "Top Rated",
"icon": "⭐",
"img": "assets/holiday/p072.jpg",
"img2": "https://cdn.store.link/products/store18473/-501ol-noise%20rep.png?versionId=8NR5FnxDNCRttpE8U20Z0IKa2wRUGldG",
"tier": "Pinnacle"
},
{
"id": "h073",
"name": "Nuuk BFF",
"cat": "Home Essentials",
"brand": "NUUK",
"price": 2700.0,
"mrp": null,
"moq": 25,
"desc": "Compact, lightweight handheld fan weighing under 250 g, designed for portability and everyday comfort.",
"longDesc": "Compact, lightweight handheld fan weighing under 250 g, designed for portability and everyday comfort. Features IceTouch™ technology for rapid surface cooling of up to 5°C. 180° adjustable head with a foldable design for versatile use and easy storage. Powered by a 3,600 mAh battery, delivering up to 10 hours of cooling. Offers 100 speed settings with a simple one-button interface. Supports USB-C fast charging and includes a wearable lanyard for convenient carrying. Ideal for commuting, travel, outdoor events, weddings, and everyday use.",
"feats": [
"Colour: Pink",
"Lead time: ~7 days",
"MOQ 25 units"
],
"img": "assets/holiday/p073.jpg",
"img2": "https://cdn.store.link/products/store18473/va0-m7-nuuk%20bff.png?versionId=P2HltOTvmbWgaZBfFWNzdN7FUXEzLB0.",
"tier": "Pinnacle"
},
{
"id": "h074",
"name": "Nuuk Krush",
"cat": "Home Essentials",
"brand": "NUUK",
"price": 3494.0,
"mrp": 5299,
"moq": 25,
"desc": "Compact, high-speed smoothie blender powered by a 500W motor running at 24,500 RPM.",
"longDesc": "Compact, high-speed smoothie blender powered by a 500W motor running at 24,500 RPM. Patented 6-blade titanium technology efficiently blends fruits, greens, nuts, and ice. Includes a 460ml leak-proof Go Jar™ made from BPA-free material. Portable jar design fits standard car cupholders, ideal for on-the-go use. Features Press to Play™ safety technology for controlled operation. Easy-to-clean design for convenient everyday use. Ideal for preparing smoothies, shakes, and nutritious drinks at home, work, or the gym.",
"feats": [
"Colour: Red",
"Lead time: ~7 days",
"MOQ 25 units"
],
"img": "assets/holiday/p074.jpg",
"img2": "https://cdn.store.link/products/store18473/s0cq2t-nuuk%20kr%C3%BCsh.png?versionId=m.n2jhdnD4QHBZKw3nHl3o.hjog.4QVd",
"tier": "Pinnacle"
},
{
"id": "h075",
"name": "Nuuk Ren Go",
"cat": "Home Essentials",
"brand": "NUUK",
"price": 4227.0,
"mrp": 5699,
"moq": 25,
"desc": "4-in-1 cordless portable vacuum cleaner with vacuuming, blowing, inflating, and deflating functions.",
"longDesc": "4-in-1 cordless portable vacuum cleaner with vacuuming, blowing, inflating, and deflating functions. Delivers 11 kPa suction power with a BLDC motor and two modes: Eco and Turbo. 4,400 mAh battery provides up to 20 minutes of runtime with Type-C charging. Includes 7 attachments for versatile cleaning across home interiors, car interiors, and hard-to-reach areas. Dual filtration system with a dust shield helps trap dust and prevent backflow. Lightweight, compact design with a rubberised ergonomic grip for comfortable handling. Ideal for home, car, and everyday cleaning needs.",
"feats": [
"Material: ABS",
"Colour: Black",
"Lead time: ~7 days",
"MOQ 25 units"
],
"img": "assets/holiday/p075.jpg",
"img2": "https://cdn.store.link/products/store18473/80aqx0-nuuk%20ren%20go.png?versionId=6gotb8Vo2ZUKDfKTzlYOxye4Tn1yO6iL",
"tier": "Pinnacle"
},
{
"id": "h076",
"name": "Nuuk STRÖM GO v2",
"cat": "Home Essentials",
"brand": "NUUK",
"price": 3727.0,
"mrp": 4499,
"moq": 25,
"desc": "Compact, travel-friendly garment steamer that heats up in just 30 seconds.",
"longDesc": "Compact, travel-friendly garment steamer that heats up in just 30 seconds. Delivers 20 g/min of steam for effective wrinkle removal. Supports horizontal and vertical steaming, functioning as both a steamer and an iron. Features a 120 ml water tank for up to 10 minutes of continuous steaming. Ideal for refreshing clothes and removing creases at home or while travelling.",
"feats": [
"Material: ABS",
"Colour: Red",
"Lead time: ~7 days",
"MOQ 25 units"
],
"img": "assets/holiday/p076.jpg",
"img2": "https://cdn.store.link/products/store18473/6tm-pk-nuuk%20str%C3%B6m%20go%20%5Bv2%5D.png?versionId=PwtX0g4Rt87Mf4hfvSwhAC_egoNMVTjy",
"tier": "Pinnacle"
},
{
"id": "h077",
"name": "travelXOXO Keep It Cold",
"cat": "Home Essentials",
"brand": "travelXOXO",
"price": 599.0,
"mrp": 600,
"moq": 25,
"desc": "Made from high-quality neoprene",
"longDesc": "Made from high-quality neoprene Features stitching and bias trim at the top for added durability Designed to carry your favourite cans and bottles Keeps beverages cool for up to 1.5 hours Easy to use and clean",
"feats": [
"Material: neoprene",
"Colour: Navy Blue",
"Lead time: ~14 days",
"MOQ 25 units"
],
"img": "assets/holiday/p077.jpg",
"img2": "https://cdn.store.link/products/store18473/gdj8hw-10.png?versionId=p1F.1Y6Tc.udsK30zhu7Cvf8nPuW3GQZ",
"tier": "Signature"
},
{
"id": "h078",
"name": "Portronics Vayu 8.0",
"cat": "Gadget & Tech",
"brand": "Portronics",
"price": 2309.0,
"mrp": 4999,
"moq": 25,
"desc": "Powerful portable air inflator featuring 2 × 2000mAh rechargeable batteries for multiple inflations on a…",
"longDesc": "Powerful portable air inflator featuring 2 × 2000mAh rechargeable batteries for multiple inflations on a single charge. Delivers up to 150 PSI maximum air pressure, making it suitable for inflating car, motorcycle, bicycle, and scooter tyres, as well as sports balls. Smart preset inflation modes for Car, Bike, Cycle, and Football provide quick and hassle-free operation with a single button press. Dual-line digital display shows both the current and preset pressure simultaneously for accurate and convenient monitoring. Auto shut-off function automatically stops inflation once the desired pressure is reached, preventing over-inflation. Built-in LED torch with SOS mode enhances visibility and provides emergency assistance during night-time or roadside use. Integrated hanging loop enables convenient hands-free operation while inflating. Compact, lightweight, and travel-friendly design fits easily into your car, backpack, or storage compartment. Compatible with a wide range of inflatables, making it an ideal solution for daily use, road trips, outdoor activities, and emergency situations.",
"feats": [
"Material: ABS Plastic",
"Colour: Black",
"Lead time: ~14 days",
"MOQ 25 units"
],
"badge": "Top Rated",
"icon": "⭐",
"img": "assets/holiday/p078.jpg",
"img2": "https://cdn.store.link/products/store18473/smin5h-39.png?versionId=QqRgolUSp69dcZYbDtnbK.0.camDytgD",
"tier": "Supreme"
},
{
"id": "h079",
"name": "Philips Beard Trimmer Series 3000",
"cat": "Gadget & Tech",
"brand": "Philips",
"price": 1359.2,
"mrp": 1699,
"moq": 25,
"desc": "Advanced Lift & Trim Technology lifts and guides low-lying hairs towards the blades for fast, precise, and…",
"longDesc": "Advanced Lift & Trim Technology lifts and guides low-lying hairs towards the blades for fast, precise, and even trimming results. Self-sharpening stainless steel blades deliver long-lasting sharpness and consistent cutting performance without the need for blade oiling. Integrated 1 mm precision length settings provide accurate trimming for a well-groomed beard and stubble. Powerful rechargeable battery offers up to 60 minutes of cordless operation on a 1.5-hour full charge. Ergonomic, lightweight design ensures a comfortable grip and effortless handling during grooming. Skin-friendly blade tips are designed to provide a comfortable trimming experience while minimizing irritation. Easy-to-clean detachable trimming head allows for quick and convenient maintenance. Ideal for trimming, shaping, and maintaining beards, moustaches, and stubble for everyday grooming.",
"feats": [
"Material: ABS Plastic",
"Colour: Black",
"Lead time: ~14 days",
"MOQ 25 units"
],
"img": "assets/holiday/p079.jpg",
"img2": "https://cdn.store.link/products/store18473/8ohfpn-40.png?versionId=z4HcO7d28Wa2ZUCxKOzzn3hDQZ3adG9G",
"tier": "Elite"
},
{
"id": "h080",
"name": "Xech X-Jet Neo",
"cat": "Gadget & Tech",
"brand": "Xech",
"price": 1712.0,
"mrp": 4299,
"moq": 25,
"desc": "Powerful 120W brushless motor delivers up to 110,000 RPM airflow for fast and efficient dust removal.",
"longDesc": "Powerful 120W brushless motor delivers up to 110,000 RPM airflow for fast and efficient dust removal. Features 6 adjustable speed levels to handle everything from delicate electronics to heavy-duty cleaning tasks. Smart digital display clearly shows the selected speed level and remaining battery status for convenient operation. Built-in LED light illuminates dark and hard-to-reach areas, ensuring thorough cleaning in any environment. Compact and lightweight design weighing only 243 g makes it easy to carry and comfortable to use for extended periods. USB Type-C fast charging fully recharges the device in approximately 2 hours, providing cordless convenience. Eco-friendly and reusable alternative to disposable compressed air cans, offering chemical-free and sustainable cleaning. Ideal for cleaning keyboards, laptops, desktop PCs, cameras, car interiors, electronic gadgets, crafts, and other delicate equipment. Durable construction and high-performance design make it perfect for home, office, automotive, and professional cleaning applications.",
"feats": [
"Material: ABS Plastic",
"Colour: White",
"Lead time: ~14 days",
"MOQ 25 units"
],
"img": "assets/holiday/p080.jpg",
"img2": "https://cdn.store.link/products/store18473/ah1kup-45.png?versionId=HzBurEchNLZHWcRAagf5VshIYxLrvatL",
"tier": "Prestige"
},
{
"id": "h081",
"name": "Curapod by Litemed | Non Invasive Pain Management Device",
"cat": "Gadget & Tech",
"brand": "Curapod",
"price": 6665.0,
"mrp": 8399,
"moq": 25,
"desc": "Uses red and near-infrared light therapy (photobiomodulation) to support the body's natural healing and…",
"longDesc": "Uses red and near-infrared light therapy (photobiomodulation) to support the body's natural healing and recovery process. Helps reduce inflammation, improve local blood circulation, and promote tissue repair through targeted light therapy. Non-invasive and drug-free therapy designed for safe, convenient, and consistent daily use. Targets the mitochondria within cells to enhance cellular energy production and support overall recovery. Provides relief from joint and muscle discomfort, including pain in the knees, shoulders, hips, neck, back, wrists, ankles, and legs. Suitable for managing everyday discomfort associated with arthritis, joint stiffness, muscle soreness, cramps, strains, and sports-related fatigue. Helps ease chronic and nerve-related discomfort, including sciatica, tendinitis, bursitis, carpal tunnel discomfort, and cervical or lumbar pain. Effective for relieving common conditions such as plantar fasciitis, frozen shoulder, trapezius tightness, and heel pain. Lightweight and portable design makes it ideal for use at home, in the office, or while traveling.",
"feats": [
"Colour: Black",
"Lead time: ~14 days",
"MOQ 25 units"
],
"img": "assets/holiday/p081.jpg",
"img2": "https://cdn.store.link/products/store18473/4lht37-71.png?versionId=4O_95Ifavx2iSdQGarApFGHhe20LnUGi",
"tier": "Pinnacle"
},
{
"id": "h082",
"name": "The Body Keeps the Score Book",
"cat": "Office Essentials",
"brand": "NA",
"price": 1553.6,
"mrp": 1942,
"moq": 5,
"desc": "THE INTERNATIONAL BESTSELLER - OVER 3 MILLION COPIES SOLD",
"longDesc": "THE INTERNATIONAL BESTSELLER - OVER 3 MILLION COPIES SOLD 'Dr. van der Kolk's masterpiece combines the boundless curiosity of the scientist, the erudition of the scholar, and the passion of the truth teller' Judith Herman, author of Trauma and Recovery The effects of trauma can be devastating for sufferers, their families and future generations. Here one of the world's experts on traumatic stress offers a bold new paradigm for treatment, moving away from standard talking and drug therapies and towards an alternative approach that heals mind, brain and body. 'Fascinating, hard to put down, and filled with powerful case histories. . . . the most important series of breakthroughs in mental health in the last thirty years' Norman Doidge, author of The Brain that Changes Itself 'An astonishing and important book. The trauma Bible. I cannot recommend it enough for anyone struggling with...well...anything' Tara Westover",
"feats": [
"Material: Paper",
"Lead time: ~14 days",
"MOQ 5 units"
],
"badge": "Top Rated",
"icon": "⭐",
"img": "assets/holiday/p082.jpg",
"tier": "Prestige"
},
{
"id": "h083",
"name": "Ice Cream Maker",
"cat": "Home Essentials",
"brand": "Ninja",
"price": 27992.0,
"mrp": 34990,
"moq": 5,
"desc": "Create smooth, creamy frozen desserts at home with 7 one-touch digital programs, including ice cream,…",
"longDesc": "Create smooth, creamy frozen desserts at home with 7 one-touch digital programs, including ice cream, gelato, sorbet, lite ice cream, milkshakes, smoothies and mix-ins. Features Creamify technology with a dual-drive motor for efficient processing and a smooth, creamy texture. Allows customisation of ingredients to prepare protein-rich, low-sugar, dairy-free and vegan desserts according to personal preferences. Simply freeze your prepared base for 24 hours before processing it into delicious frozen treats in minutes. Includes an 800W motor, 473ml capacity across 2 pint containers, and an ice cream shaving blade for versatile dessert preparation. Comes with a base unit, outer bowl, outer bowl lid, 2 pint containers, 2 pint container lids and an ice cream shaving blade. Features an automatic shut-off function for added convenience and safety.",
"feats": [
"Material: Plastic & Metal",
"Colour: Black",
"Lead time: ~14 days",
"MOQ 5 units"
],
"badge": "Top Rated",
"icon": "⭐",
"img": "assets/holiday/p083.jpg",
"tier": "Pinnacle"
},
{
"id": "h084",
"name": "SOIL Everwood Frame",
"cat": "Home Essentials",
"brand": "SOIL",
"price": 499.0,
"mrp": null,
"moq": 25,
"desc": "Elegant wooden finish with a minimalist and modern design",
"longDesc": "Elegant wooden finish with a minimalist and modern design Magnetic closure holds the photo securely—no screws or nails needed Perfect for showcasing your favorite memories in a stylish way Size: 18.5 cm (W) x 12.5 cm (H) x 2 cm (D)",
"feats": [
"Material: Wood",
"Colour: Brown",
"Lead time: ~14 days",
"MOQ 25 units"
],
"img": "assets/holiday/p084.jpg",
"img2": "https://cdn.store.link/products/store18473/c9ce0z-csun-0353.jpg?versionId=TaLu9JLeh614RzdWuRNdVcqEJ7YHlYUU",
"tier": "Signature"
},
{
"id": "h085",
"name": "Irobot Roomba s9+",
"cat": "Home Essentials",
"brand": "iRobot",
"price": 119920.0,
"mrp": 149900,
"moq": 25,
"desc": "Backed by over 30 years of robotics expertise, iRobot has sold more than 30 million home robots worldwide.",
"longDesc": "Backed by over 30 years of robotics expertise, iRobot has sold more than 30 million home robots worldwide. Features PerfectEdge Technology with advanced sensors to optimise cleaning along edges and deep into corners. Equipped with a 3-Stage Cleaning System that lifts, loosens and removes dirt, delivering up to 40 times the suction power of the Roomba 600 series cleaning system. Offers Imprint Smart Mapping to customise cleaning schedules and select specific rooms or areas for targeted cleaning. Uses intelligent navigation to identify and clean specific areas, with voice assistant compatibility for convenient hands-free operation. Automatically empties collected dirt and dust into an AllergenLock bag, reducing the need for frequent manual emptying. Designed for indoor surfaces and finished in an elegant Java Black colour. Features touch controls and compatibility with supported smartphones, tablets and smart home assistants. Powered by a lithium-ion battery system.",
"feats": [
"Colour: Black",
"Lead time: ~14 days",
"MOQ 25 units"
],
"img": "assets/holiday/p085.jpg",
"tier": "Pinnacle"
},
{
"id": "h086",
"name": "PCN 24– Stillness of Sakura",
"cat": "Wellness",
"brand": "Art Therapy",
"price": 1039.2,
"mrp": 1299,
"moq": 25,
"desc": "Features a serene Japanese-inspired design, Stillness of Sakura, celebrating tranquillity, balance and…",
"longDesc": "Features a serene Japanese-inspired design, Stillness of Sakura, celebrating tranquillity, balance and beauty through delicate sakura blossoms, reflective waters and a timeless pagoda. Offers a relaxing paint-by-numbers experience that encourages mindfulness, creativity and stress-free artistic expression. Suitable for beginners and experienced artists, allowing anyone to create beautiful artwork by matching numbered paints to the corresponding sections on the canvas. Includes a numbered linen canvas, premium numbered acrylic paint set and an artist-quality 3-piece brush set. Comes with a scanner for digital reference to support the painting process. Canvas dimensions: 38.1 × 58 cm.",
"feats": [
"Colour: Custom",
"Lead time: ~14 days",
"MOQ 25 units"
],
"img": "assets/holiday/p086.jpg",
"tier": "Elite"
},
{
"id": "h087",
"name": "Brick",
"cat": "Gadget & Tech",
"brand": "Brick",
"price": 4560.0,
"mrp": 5700,
"moq": 25,
"desc": "Blocks distracting apps instantly by tapping your phone against The Brick, helping you stay focused and…",
"longDesc": "Blocks distracting apps instantly by tapping your phone against The Brick, helping you stay focused and reduce screen time. Requires the physical device to unlock blocked apps, creating a deliberate barrier against impulsive app usage and easy workarounds. Allows you to customise which apps to block or choose specific apps to keep accessible while locking everything else. Supports personalised modes for different routines, including Work, Family Time, Sleep and Study. Work Mode helps block social media while keeping essential apps like Slack and Maps accessible. Family Time Mode minimises digital distractions by restricting access to all apps except selected essentials, such as the camera. Sleep Mode helps establish healthier nighttime habits by blocking email and scrolling apps after 10 PM. Study Mode enables one-tap distraction blocking to support concentration and productivity.",
"feats": [
"Colour: Black",
"Lead time: ~14 days",
"MOQ 25 units"
],
"img": "assets/holiday/p087.jpg",
"tier": "Pinnacle"
},
{
"id": "h088",
"name": "Camping Kit 11 in 1",
"cat": "Travel Extreme",
"brand": "TrekEaze",
"price": 1999.0,
"mrp": 2490,
"moq": 25,
"desc": "Comprehensive 11-in-1 camping kit designed for outdoor adventures, camping trips and emergency preparedness.",
"longDesc": "Comprehensive 11-in-1 camping kit designed for outdoor adventures, camping trips and emergency preparedness. Includes essential tools such as an emergency thermal blanket, fire starter, scraper, compass, Swiss card, flashlight, whistle, camping bracelet and storage box. Features a multifunctional paracord bracelet with an integrated compass, fire starter and whistle for convenient access to essential outdoor tools. Equipped with a 360-degree rotating compass bezel to assist with directional navigation during outdoor activities. Includes a thermal emergency blanket designed to retain up to 90% of body heat, helping provide warmth in cold conditions and serving as a potential shelter or signalling aid. Comes with a durable aluminium alloy rescue whistle featuring a double-tube design and a sound output of up to 120 dB for emergency signalling. Made from plastic and designed in a compact format for easy storage and portability. Product dimensions: 15 × 8 × 5 cm. Item weight: 250 g.",
"feats": [
"Colour: Black",
"Lead time: ~14 days",
"MOQ 25 units"
],
"badge": "Top Rated",
"icon": "⭐",
"img": "assets/holiday/p088.jpg",
"tier": "Prestige"
},
{
"id": "h089",
"name": "Airplane Foot Hammock",
"cat": "Travel Extreme",
"brand": "Basic Concepts",
"price": 3804.0,
"mrp": 4755,
"moq": 25,
"desc": "Designed to enhance travel comfort by providing elevated foot support, helping reduce discomfort and…",
"longDesc": "Designed to enhance travel comfort by providing elevated foot support, helping reduce discomfort and strain on the feet and lower back during long journeys. Features an extra-long adjustable strap that attaches to the tray table of the seat in front, allowing users to customise the height for a comfortable resting position. Suitable for travellers of different heights, including adults and children, and can be used on aeroplanes, trains and other compatible seating arrangements. Equipped with evenly padded foot support for enhanced comfort and relaxation during extended journeys. Includes a convenient travel bag for easy storage and portability. Features an adjustable strap ranging from 17 to 34 inches, with an 18-inch width and 9-inch depth for comfortable foot placement. Designed to provide personal foot support without unnecessarily disturbing neighbouring passengers.",
"feats": [
"Material: Memory Foam",
"Colour: Black",
"Lead time: ~14 days",
"MOQ 25 units"
],
"badge": "Top Rated",
"icon": "⭐",
"img": "assets/holiday/p089.jpg",
"tier": "Pinnacle"
},
{
"id": "h090",
"name": "Eco Friendly Gifting – Cork Lid Soy Candles – The Bamboo Bae",
"cat": "Home Essentials",
"brand": "Bamboo Bae",
"price": 639.0,
"mrp": 799,
"moq": 25,
"desc": "Hand-poured using natural soy wax for a clean and long-lasting burn.",
"longDesc": "Hand-poured using natural soy wax for a clean and long-lasting burn. Elegant reusable glass jar design with a natural cork lid for a premium, eco-friendly appeal. Available in four signature fragrances: Café Mocha, Love Vanilla, Lemongrass, and Night Jasmine. Café Mocha offers a rich, bold, and comforting aroma. Love Vanilla delivers a soft, sweet, and soothing fragrance. Lemongrass provides a fresh, crisp, and uplifting scent. Night Jasmine features a floral, calming, and timeless aroma. Reusable glass jars can be repurposed for storage or décor after the candle is finished. Ideal for festive hampers, corporate gifting, celebrations, and personal use.",
"feats": [
"Colour: Love Vanilla",
"Lead time: ~14 days",
"MOQ 25 units"
],
"badge": "Top Rated",
"icon": "⭐",
"img": "assets/holiday/p090.jpg",
"tier": "Signature"
},
{
"id": "h091",
"name": "Bamboo Charcoal Soap | Handmade Spa Bar | With Aloe Vera Extract",
"cat": "Wellness",
"brand": "Bamboo Bae",
"price": 159.0,
"mrp": 199,
"moq": 25,
"desc": "Premium vegan spa soap bar made using natural ingredients and a gentle manufacturing process.",
"longDesc": "Premium vegan spa soap bar made using natural ingredients and a gentle manufacturing process. Enriched with activated bamboo charcoal to cleanse the skin and help remove dead skin cells and deeper impurities. Formulated to moisturize the skin while creating a gentle, rich lather. Suitable for all skin types, made with natural and mild ingredients Cruelty-free formulation, not tested on animals. Free from artificial colours and synthetic chemicals. Key Ingredients: Bamboo Charcoal Powder, Aloe Vera Extract, Essential Oils, Glycerin, DM Water, and Soap Base. Net Weight: 100 g.",
"feats": [
"Colour: Charcoal",
"Lead time: ~14 days",
"MOQ 25 units"
],
"img": "assets/holiday/p091.jpg",
"tier": "Signature"
},
{
"id": "h092",
"name": "Tyffyn - 600 ml - Black",
"cat": "Home Essentials",
"brand": "Vaya",
"price": 2374.0,
"mrp": 2790,
"moq": 25,
"desc": "Sleek black lunchbox with a matte finish that offers a sophisticated, versatile, and modern look.",
"longDesc": "Sleek black lunchbox with a matte finish that offers a sophisticated, versatile, and modern look. Includes 1 outer shell, 1 base, and 2 inner containers with lids. Comes with two 300 ml inner containers, providing a total lunchbox capacity of 600 ml. Compact dimensions of 13 H × 16 W × 11.5 D cm, making it convenient for everyday carrying. Outer shell body is made from durable stainless steel for a sturdy and reliable build. Base and handle are crafted from FDA-approved, BPA-free plastic. Features stainless steel latches for secure closure. Inner containers are made from polished stainless steel for durability and easy maintenance. Inner container lids and finger grips are made from FDA-approved, BPA-free plastic. Designed for convenient portioning and organized meal storage.",
"feats": [
"Material: Stainless Steel",
"Colour: Black",
"Lead time: ~7 days",
"MOQ 25 units"
],
"img": "assets/holiday/p092.jpg",
"img2": "https://cdn.store.link/products/store18473/223nua-vaya%20lunch%20box.png?versionId=yGjXen_bWmqRiUJzMb_03GtbxZytp558",
"tier": "Supreme"
},
{
"id": "h093",
"name": "Hot Chocolate Mint Stir it Up",
"cat": "Food & Edibles",
"brand": "Smoor",
"price": 195.0,
"mrp": null,
"moq": 25,
"desc": "Brand; Smoor",
"longDesc": "Brand; Smoor Combines rich milk chocolate with refreshing mint for a bold and indulgent flavour. Innovative chocolate-on-a-stick design for convenient preparation of hot chocolate. Simply stir into a cup of warm milk to create a delicious hot chocolate drink in seconds. Offers a delightful blend of creamy chocolate and cool mint notes. Perfect for cozy evenings, relaxing moments, and enjoying alongside a favourite book. Ideal for gifting, festive hampers, and chocolate lovers.",
"feats": [
"Material: Edibles",
"Colour: Mint",
"Lead time: ~7 days",
"MOQ 25 units"
],
"img": "assets/holiday/p093.jpg",
"tier": "Signature"
},
{
"id": "h094",
"name": "Hot Chocolate Mocha Stir it Up",
"cat": "Food & Edibles",
"brand": "Smoor",
"price": 195.0,
"mrp": null,
"moq": 25,
"desc": "Brand; Smoor",
"longDesc": "Brand; Smoor Combines rich milk chocolate with refreshing mint for a bold and indulgent flavour. Innovative chocolate-on-a-stick design for convenient preparation of hot chocolate. Simply stir into a cup of warm milk to create a delicious hot chocolate drink in seconds. Offers a delightful blend of creamy chocolate and cool mint notes. Perfect for cozy evenings, relaxing moments, and enjoying alongside a favourite book. Ideal for gifting, festive hampers, and chocolate lovers.",
"feats": [
"Material: Edibles",
"Colour: Mocha",
"Lead time: ~7 days",
"MOQ 25 units"
],
"badge": "Top Rated",
"icon": "⭐",
"img": "assets/holiday/p094.jpg",
"tier": "Signature"
},
{
"id": "h095",
"name": "Hot Chocolate 35% Milk - Stir it Up",
"cat": "Food & Edibles",
"brand": "Smoor",
"price": 195.0,
"mrp": null,
"moq": 25,
"desc": "Brand; Smoor",
"longDesc": "Brand; Smoor Combines rich milk chocolate with refreshing mint for a bold and indulgent flavour. Innovative chocolate-on-a-stick design for convenient preparation of hot chocolate. Simply stir into a cup of warm milk to create a delicious hot chocolate drink in seconds. Offers a delightful blend of creamy chocolate and cool mint notes. Perfect for cozy evenings, relaxing moments, and enjoying alongside a favourite book. Ideal for gifting, festive hampers, and chocolate lovers.",
"feats": [
"Material: Edibles",
"Colour: Mocha",
"Lead time: ~7 days",
"MOQ 25 units"
],
"badge": "Top Rated",
"icon": "⭐",
"img": "assets/holiday/p095.jpg",
"tier": "Signature"
},
{
"id": "h096",
"name": "Tritan Bottle-500 ML",
"cat": "Drinkware",
"brand": "Hydromonk",
"price": 434.0,
"mrp": 1300,
"moq": 100,
"desc": "BPA-free and FDA certified, made from Tritan material",
"longDesc": "BPA-free and FDA certified, made from Tritan material 750ml capacity with stainless steel base and cap Hand wash recommended, do not microwave Dimensions: 2-7/8\" dia. x 11-1/8\"",
"feats": [
"Material: Tritan",
"Colour: Black",
"Lead time: ~30 days",
"MOQ 100 units"
],
"img": "assets/holiday/p096.jpg",
"img2": "https://cdn.store.link/products/store18473/4kqi-g-csun-1354.png?versionId=iUn2btjh4FxnbJ_1vb8SzGW0JHrWwDtb",
"tier": "Signature"
},
{
"id": "h097",
"name": "Urban Gear Hydra Pro Stainless Steel Travel Mug With Handle",
"cat": "Drinkware",
"brand": "Urban Gear",
"price": 870.0,
"mrp": 1499,
"moq": 25,
"desc": "1200 ml capacity, ideal for carrying generous amounts of beverages throughout the day",
"longDesc": "1200 ml capacity, ideal for carrying generous amounts of beverages throughout the day Made from durable 18/8 stainless steel for reliable everyday use Double-wall vacuum insulation helps maintain the temperature of beverages for longer Features a comfortable grip handle for convenient carrying and portability Includes a stainless steel straw for easy and convenient sipping BPA-free construction for safe everyday use Suitable for hot and cold beverages, travel, work, gym, and outdoor activities Supports multiple customization options including engraving, screen printing, UV printing, and DTF sticker branding Sturdy and practical design combines functionality with a premium appearance Dimensions: approximately 7.5 x 14.5 x 27 cm Weight: approximately 468 g",
"feats": [
"Material: Stainless Steel",
"Colour: White",
"Lead time: ~14 days",
"MOQ 25 units"
],
"badge": "Top Rated",
"icon": "⭐",
"img": "assets/holiday/p097.jpg",
"img2": "https://cdn.store.link/products/store18473/nue3cb-hydra%20pro%20-%20white.png?versionId=ug.3z2YuoFYTW8Qn6HGlf6ZSqfozuQCw",
"tier": "Signature"
},
{
"id": "h098",
"name": "Sleepy Owl Vanilla Iced Matcha Latte Premix",
"cat": "Food & Edibles",
"brand": "Sleepy Owl",
"price": 300.0,
"mrp": 375,
"moq": 25,
"desc": "Instant iced matcha latte premix powder made with premium Japanese matcha green tea powder.",
"longDesc": "Instant iced matcha latte premix powder made with premium Japanese matcha green tea powder. Vanilla flavour delivers a smooth, creamy, café-style matcha experience. Made with authentic Japanese matcha, offering a rich umami taste and vibrant matcha aroma. Easy to prepare by simply adding cold water and stirring, with no whisking required. Provides a convenient option for enjoying iced matcha at home, at work, or on the go. Contains no added sugar and provides approximately 90 kcal per cup. Available in three flavours: Classic, Strawberry, and Vanilla, with an assorted pack option. Vegetarian product. Net Quantity: 60 g. Packaging: Sachet.",
"feats": [
"Material: Edibles",
"Lead time: ~14 days",
"MOQ 25 units"
],
"badge": "Top Rated",
"icon": "⭐",
"img": "assets/holiday/p098.jpg",
"tier": "Signature"
},
{
"id": "h099",
"name": "OMG Scarf",
"cat": "Outerwear",
"brand": "OMG",
"price": 1399.0,
"mrp": null,
"moq": 100,
"desc": "Soft cotton scarf designed for everyday comfort and effortless style.",
"longDesc": "Soft cotton scarf designed for everyday comfort and effortless style. Lightweight and breathable, perfect for year-round wear. A versatile cotton scarf that adds a timeless touch to any look. Crafted from pure cotton for softness, breathability, and durability. Simple yet elegant, a classic scarf suited for all occasions",
"feats": [
"Material: Cotton , Polyester , Acrylic",
"Colour: Black",
"Lead time: ~14 days",
"MOQ 100 units"
],
"img": "assets/holiday/p099.jpg",
"img2": "https://cdn.store.link/products/store18473/46gr4j-csun-1533.png?versionId=laspY_Y_8T1_SKb_kz4KvIzRxpkp_rbs",
"tier": "Elite"
},
{
"id": "h100",
"name": "Philips 1000 series Airfryer 4.2L",
"cat": "Home Essentials",
"brand": "Philips",
"price": 5995.0,
"mrp": null,
"moq": 10,
"desc": "Rapid air circulation technology delivers crispy, golden results with little to no added oil.",
"longDesc": "Rapid air circulation technology delivers crispy, golden results with little to no added oil. Cooks food with up to 90% less fat while maintaining great taste and texture. Crispy on the outside and tender on the inside for consistently delicious meals. Multi-functional design supports 12 cooking modes, including air frying, baking, roasting, grilling, reheating, defrosting, and dehydrating. Adjustable time and temperature controls provide precise cooking for a variety of recipes. Fast and even heat distribution ensures efficient and consistent cooking performance. Non-stick cooking basket helps prevent food from sticking and makes cleanup effortless. Dishwasher-safe removable components offer quick and convenient maintenance. Ideal for preparing snacks, vegetables, meat, seafood, frozen foods, and baked treats. Energy-efficient cooking solution that reduces cooking time compared to conventional ovens. Modern, compact design fits seamlessly into home and office kitchen spaces.",
"feats": [
"Material: Aluminium",
"Colour: Black",
"Lead time: ~14 days",
"MOQ 10 units"
],
"badge": "Top Rated",
"icon": "⭐",
"img": "assets/holiday/p100.jpg",
"img2": "Retail",
"tier": "Pinnacle"
},
{
"id": "h101",
"name": "Regalia Pronto Brew Coffee Maker",
"cat": "Home Essentials",
"brand": "Wonderchef",
"price": 3165.0,
"mrp": 5200,
"moq": 10,
"desc": "Brews fresh, aromatic drip coffee for a refreshing start to the day.",
"longDesc": "Brews fresh, aromatic drip coffee for a refreshing start to the day. Features a premium 750 ml borosilicate glass carafe with an integrated hot plate. Brews and serves up to 6 cups of coffee in one cycle. Includes a reusable conical coffee filter for convenient brewing. Drip controller prevents coffee from dripping when the carafe is removed for pouring. Integrated keep-warm hot plate maintains coffee temperature for convenient serving. Removable and reusable coffee filter allows easy cleaning and maintenance.",
"feats": [
"Colour: Black",
"Lead time: ~14 days",
"MOQ 10 units"
],
"img": "assets/holiday/p101.jpg",
"tier": "Pinnacle"
},
{
"id": "h102",
"name": "Tag8 Smart Family Passport Tan",
"cat": "Travel Extreme",
"brand": "Tag 8",
"price": 3999.0,
"mrp": 4999,
"moq": 10,
"desc": "Premium vegan leather passport case featuring an integrated BLE tracker and RFID-blocking technology for…",
"longDesc": "Premium vegan leather passport case featuring an integrated BLE tracker and RFID-blocking technology for enhanced travel security. Provides real-time GPS location visibility within Bluetooth range and displays the last-seen location when out of range. Compatible with Android and iOS devices through the DOLPHIN Tracker app for convenient location tracking. Features an anti-loss separation alarm to help prevent passports from being misplaced. Includes a passport loss recovery service with a stated 90% return rate, with most lost passports reportedly reunited with their owners within 8 hours. Offers passport replacement cost reimbursement if the lost passport cannot be recovered, subject to the service terms. Provides worldwide coverage without subscription fees, for travellers of all nationalities. Incorporates RFID-blocking technology to help protect passports and cards against unauthorized digital scanning. Handcrafted by women artisans using premium vegan leather for a refined and durable finish. Accommodates up to 4 passports, along with cash, cards, boarding passes, and driving licences. Features a finder rewards programme to appreciate individuals who help return lost passports.",
"feats": [
"Material: Leather",
"Colour: Tan",
"Lead time: ~14 days",
"MOQ 10 units"
],
"badge": "Top Rated",
"icon": "⭐",
"img": "assets/holiday/p102.jpg",
"tier": "Pinnacle"
},
{
"id": "h103",
"name": "Oats and Raisins Big Cookies",
"cat": "Food & Edibles",
"brand": "Theobrama",
"price": 68.0,
"mrp": 85,
"moq": 10,
"desc": "Soft and chewy cookie with a delicious, satisfying texture.",
"longDesc": "Soft and chewy cookie with a delicious, satisfying texture. Made with super grain oats, raisins, butter, and jaggery. Contains zero maida, making it a wholesome snacking option. Allergens: Milk, oats, and wheat.",
"feats": [
"Material: Edibles",
"Colour: Custom",
"Lead time: ~14 days",
"MOQ 10 units"
],
"img": "assets/holiday/p103.jpg",
"tier": "Signature"
},
{
"id": "h104",
"name": "Chocolate Chip Big Cookie",
"cat": "Food & Edibles",
"brand": "Theobrama",
"price": 76.0,
"mrp": 95,
"moq": 10,
"desc": "Soft and rich cookie made with couverture chocolate and butter.",
"longDesc": "Soft and rich cookie made with couverture chocolate and butter. Loaded with dark chocolate chunks for an indulgent chocolate experience. Allergens: Wheat, milk, and soy.",
"feats": [
"Material: Edibles",
"Colour: Custom",
"Lead time: ~14 days",
"MOQ 10 units"
],
"img": "assets/holiday/p104.jpg",
"tier": "Signature"
},
{
"id": "h105",
"name": "Cheese Crackers",
"cat": "Food & Edibles",
"brand": "Theobrama",
"price": 180.0,
"mrp": 225,
"moq": 10,
"desc": "Crisp and flavourful crackers made with cheese, butter, mustard, and chilli.",
"longDesc": "Crisp and flavourful crackers made with cheese, butter, mustard, and chilli. Ideal for satisfying snack cravings anytime. Allergens: Wheat and milk.",
"feats": [
"Material: Edibles",
"Colour: Custom",
"Lead time: ~14 days",
"MOQ 10 units"
],
"img": "assets/holiday/p105.jpg",
"tier": "Signature"
},
{
"id": "h106",
"name": "Assorted Tea Bags Sampler | 15 Variants, 15 Count",
"cat": "Food & Edibles",
"brand": "Vahdam",
"price": 200.0,
"mrp": 250,
"moq": 10,
"desc": "Tea sampler featuring 15 unique tea variants, each offering distinct and delightful flavours.",
"longDesc": "Tea sampler featuring 15 unique tea variants, each offering distinct and delightful flavours. Ideal for exploring a variety of tea blends and discovering new favourites. Includes 15 plant-based, biodegradable pyramid tea bags for convenient brewing.",
"feats": [
"Material: Edibles",
"Colour: Custom",
"Lead time: ~14 days",
"MOQ 10 units"
],
"img": "assets/holiday/p106.jpg",
"tier": "Signature"
},
{
"id": "h107",
"name": "Jade Mini Prosperity Diwali Gift plant",
"cat": "Home Essentials",
"brand": "Ugaoo",
"price": 319.0,
"mrp": 399,
"moq": 10,
"desc": "Mini Jade plant presented in a pot, ideal for desks, workspaces, and home décor.",
"longDesc": "Mini Jade plant presented in a pot, ideal for desks, workspaces, and home décor. Pot Size: 4-inch diameter. Soil Medium: Blend of coco peat, coco chips, and soil to support plant growth. Comes in recyclable packaging for an eco-friendly presentation. Includes a message card, making it suitable for gifting and special occasions.",
"feats": [
"Material: Soil",
"Colour: Custom",
"Lead time: ~14 days",
"MOQ 10 units"
],
"badge": "Top Rated",
"icon": "⭐",
"img": "assets/holiday/p107.jpg",
"tier": "Signature"
},
{
"id": "h108",
"name": "Haworthia Turgida",
"cat": "Home Essentials",
"brand": "Ugaoo",
"price": 280.0,
"mrp": 350,
"moq": 10,
"desc": "Compact Haworthia Turgida succulent featuring rosettes of glossy, light green leaves with a distinctive…",
"longDesc": "Compact Haworthia Turgida succulent featuring rosettes of glossy, light green leaves with a distinctive crystalline, almost translucent appearance. Features curved, translucent leaf tips with attractive green striations. Ideal for indoor spaces, thriving in bright, indirect sunlight. Grows up to approximately 4 inches in size. May produce delicate white, tubular flowers on upright, slender stems under ideal growing conditions. Watering Frequency: Once every two weeks. Light Requirement: Bright, indirect sunlight. Pet-Friendly: Yes. Suitable for Beginners: Easy to care for and maintain.",
"feats": [
"Material: Soil",
"Colour: Custom",
"Lead time: ~14 days",
"MOQ 10 units"
],
"img": "assets/holiday/p108.jpg",
"tier": "Signature"
},
{
"id": "h109",
"name": "Stuffcool Revel Magnetic Wireless Qi2 Certified Charger",
"cat": "Gadget & Tech",
"brand": "StuffCool",
"price": 1625.0,
"mrp": 2999,
"moq": 25,
"desc": "Qi2-certified magnetic wireless charger delivers up to 15W fast wireless charging for compatible devices.",
"longDesc": "Qi2-certified magnetic wireless charger delivers up to 15W fast wireless charging for compatible devices. Strong magnetic alignment ensures secure attachment and optimal charging efficiency. Compatible with MagSafe-enabled iPhones and wireless charging-enabled Android smartphones using compatible magnetic cases. Also supports wireless charging for compatible earbuds and other Qi-enabled devices. Delivers fast, stable, and efficient charging with precise magnetic positioning. Includes a 20W USB-C Power Delivery wall adapter for optimal charging performance. Comes with a 1 m USB-C to USB-C charging cable for a complete out-of-the-box setup. Compact and lightweight design makes it ideal for home, office, and travel use. Built-in safety features protect against overcharging, overheating, overcurrent, and short circuits. Certified to meet international safety and quality standards for reliable everyday use. Sleek, modern design complements contemporary workspaces and mobile accessories. Ideal for corporate gifting, employee welcome kits, executive desks, and everyday charging needs.",
"feats": [
"Colour: Black",
"Lead time: ~7 days",
"MOQ 25 units"
],
"img": "assets/holiday/p109.jpg",
"img2": "https://cdn.store.link/products/store18473/bipsk6-stco-001.png?versionId=k.HPoXUbXQJXjSMJVdOfquRZnJBMU_KD",
"tier": "Prestige"
},
{
"id": "h110",
"name": "REMAXX Mini Portable Desktop Vacuum Cleaner",
"cat": "Gadget & Tech",
"brand": "Remaxx",
"price": 475.0,
"mrp": 2299,
"moq": 25,
"desc": "Compact and lightweight desktop vacuum cleaner designed for quick and convenient cleaning of small spaces.",
"longDesc": "Compact and lightweight desktop vacuum cleaner designed for quick and convenient cleaning of small spaces. Powerful high-speed motor delivers up to 12,000 RPM suction for effective removal of dust, crumbs, pet hair, eraser residue, and other fine debris. Cordless, portable design allows easy cleaning of desks, keyboards, laptops, cars, and other hard-to-reach areas. Simple one-handed operation makes it easy to use for students, professionals, and home users alike. Ideal for cleaning desktops, office workstations, keyboards, tabletops, upholstery, and vehicle interiors. Battery-powered operation using 2 AA batteries (not included) provides convenient, hassle-free portability. Durable and compact construction makes it easy to store, carry, and use wherever needed. A practical gift for students, office professionals, remote workers, and anyone who values a clean and organized workspace.",
"feats": [
"Material: Plastic",
"Colour: REMAXX",
"Lead time: ~7 days",
"MOQ 25 units"
],
"img": "assets/holiday/p110.jpg",
"img2": "https://cdn.store.link/products/store18473/-gaprw-7.png?versionId=Gmm86EQNcjG4_ANwJlXpBMbTc1qjEIEk",
"tier": "Signature"
},
{
"id": "h111",
"name": "Funtaala Wooden Mandala Paint Kit",
"cat": "Wellness",
"brand": "Funtaala",
"price": 710.0,
"mrp": 899,
"moq": 25,
"desc": "DIY wooden mandala painting kit featuring 6 pre-marked coaster blanks and 4 keychain blanks.",
"longDesc": "DIY wooden mandala painting kit featuring 6 pre-marked coaster blanks and 4 keychain blanks. Includes poster paints, a paintbrush, and step-by-step instructions for creating mandala art Made from certified pinewood with non-toxic poster colours, suitable for kids. Beginner-friendly design allows first-time users to create decorative mandala artwork with ease. Encourages creativity, artistic expression, and mindfulness through hands-on painting activities. Suitable for kids, teens, and adults as a relaxing art and craft activity. Ideal for birthdays, festive gifting, and other special occasions. Theme: Mandala. Colour: Multicolour. Dimensions: 20 × 15 × 5 cm (L × W × H)",
"feats": [
"Material: Paper",
"Colour: Custom",
"Lead time: ~7 days",
"MOQ 25 units"
],
"img": "assets/holiday/p111.jpg",
"tier": "Signature"
},
{
"id": "h112",
"name": "Phool Ruby Reed Diffuser",
"cat": "Home Essentials",
"brand": "Phool",
"price": 420.0,
"mrp": 525,
"moq": 50,
"desc": "Brand : Phool",
"longDesc": "Brand : Phool 100% natural Phool reed diffuser. Promotes stress relief and improved focus. Acts as an air freshener. Uplifting scents like citrus or eucalyptus enhance mood and productivity. Adds a welcoming and professional touch to office spaces. Ideal for employee or welcome kits. Convenient, subtle, and long-lasting for corporate use.",
"feats": [
"Material: Natural Essential Oils",
"Colour: Multicolor",
"Lead time: ~21 days",
"MOQ 50 units"
],
"img": "assets/holiday/p112.jpg",
"img2": "https://cdn.store.link/products/store18473/180-29-phool-ruby-reed-diffuser.jpg?versionId=bhyCd1EvxCBwWoLrdBHMQgIcVyYDU45D",
"tier": "Signature"
},
{
"id": "h113",
"name": "4700BC Himalayan Salt Caramel Popcorn, Tin, 125g",
"cat": "Food & Edibles",
"brand": "4700 BC",
"price": 180.0,
"mrp": 225,
"moq": 25,
"desc": "Gourmet jumbo popcorn coated in rich caramel and balanced with Himalayan salt for a delicious…",
"longDesc": "Gourmet jumbo popcorn coated in rich caramel and balanced with Himalayan salt for a delicious sweet-and-salty flavour. Made with certified non-GMO corn for a premium snacking experience. Gluten-free, cholesterol-free, and trans-fat-free, with no added MSG. Packaged in a premium reusable tin that helps keep the popcorn fresh and can be repurposed for storage. Vegetarian-friendly snack, ideal for gifting, celebrations, and indulgent snack breaks. Flavour: Himalayan Salt Caramel. Brand: 4700BC. Net Weight: 125 g. Packaging: Reusable tin. Dimensions: 10 × 10 × 11.5 cm (L × W × H).",
"feats": [
"Material: Edibles",
"Lead time: ~14 days",
"MOQ 25 units"
],
"img": "assets/holiday/p113.jpg",
"tier": "Signature"
},
{
"id": "h114",
"name": "Cards Against Humanity Family Edition",
"cat": "Games & Toys",
"brand": "Satyam Stationers",
"price": 3199.0,
"mrp": 3999,
"moq": 25,
"desc": "Family-friendly fill-in-the-blank comedy card game designed for kids and adults to play together.",
"longDesc": "Family-friendly fill-in-the-blank comedy card game designed for kids and adults to play together. Includes 600 all-new cards featuring humorous and silly topics suitable for family entertainment. Recommended for ages 8 and above. Offers an engaging gameplay experience that encourages creativity, humour, and laughter. Developed and tested with thousands of families over several years. Ideal for family game nights, gatherings, parties, and group activities.",
"feats": [
"Lead time: ~14 days",
"MOQ 25 units"
],
"badge": "Top Rated",
"icon": "⭐",
"img": "assets/holiday/p114.jpg",
"tier": "Pinnacle"
},
{
"id": "h115",
"name": "Blue Orange Taco Cat Goat Cheese Pizza The Party Card Game",
"cat": "Games & Toys",
"brand": "Satyam Stationers",
"price": 799.0,
"mrp": 999,
"moq": 25,
"desc": "Compact, portable card game designed for entertainment anytime, anywhere.",
"longDesc": "Compact, portable card game designed for entertainment anytime, anywhere. Fast-paced gameplay featuring hilarious challenges and quick reactions, ideal for parties and social gatherings. Players race to slap matching combinations of cards and spoken words before their opponents. Simple rules make the game easy to learn in approximately one minute. Each game lasts around 10–15 minutes, making it perfect for quick entertainment. Encourages quick thinking, concentration, and friendly competition. Ideal for game nights, parties, family gatherings, and get-togethers.",
"feats": [
"Material: Cardboard Paper",
"Lead time: ~14 days",
"MOQ 25 units"
],
"img": "assets/holiday/p115.jpg",
"tier": "Signature"
},
{
"id": "h116",
"name": "Jaipur Board Game Fast",
"cat": "Games & Toys",
"brand": "Satyam Stationers",
"price": 1759.2,
"mrp": 2199,
"moq": 25,
"desc": "Award-Winning Strategy Game: Enhanced edition of the popular Jaipur card game, featuring refreshed artwork…",
"longDesc": "Award-Winning Strategy Game: Enhanced edition of the popular Jaipur card game, featuring refreshed artwork while retaining its award-winning gameplay. Redesigned Artwork: Features stunning new illustrations by renowned artist Vincent Dutrait for an immersive visual experience. Designed for 2 Players: Part of Space Cowboys’ 2-Player Collection, ideal for couples, friends, and head-to-head gaming. Exclusive Collectible Coin: The first print run includes a metallic coin that adds collectible value and helps determine the first player. Easy to Learn, Strategic to Master: Combines luck and tactical decision-making, making it accessible to beginners and engaging for experienced players.",
"feats": [
"Material: Cardboard Paper",
"Lead time: ~14 days",
"MOQ 25 units"
],
"img": "assets/holiday/p116.jpg",
"tier": "Prestige"
},
{
"id": "h117",
"name": "Coup: The Thrilling Card Game of Political Intrigue",
"cat": "Games & Toys",
"brand": "Satyam Stationers",
"price": 1199.2,
"mrp": 1499,
"moq": 25,
"desc": "Fun for Adults, Teens & Families: A fast-paced card game ideal for parties, game nights, and gatherings…",
"longDesc": "Fun for Adults, Teens & Families: A fast-paced card game ideal for parties, game nights, and gatherings with friends and family. Bluffing & Strategic Challenges: Take actions, bluff about the cards you hold, and challenge opponents to outsmart them while protecting your own strategy. Easy to Learn: Learn the rules in minutes and enjoy quick gameplay sessions lasting approximately 15 minutes. Fast-Paced Gameplay: Draw two cards and take one action per turn to outmaneuver opponents, eliminate rivals, and be the last player standing. Player Count & Age: Suitable for 3–6 players aged 14 and above. Highly Replayable: Offers endless combinations of bluffing, deduction, and strategy, making every game a fresh and engaging experience.",
"feats": [
"Material: Cardboard Paper",
"Lead time: ~14 days",
"MOQ 25 units"
],
"img": "assets/holiday/p117.jpg",
"tier": "Elite"
},
{
"id": "h118",
"name": "Spot it! Dobble One Piece Card Game",
"cat": "Games & Toys",
"brand": "Satyam Stationers",
"price": 319.2,
"mrp": 399,
"moq": 25,
"desc": "One Piece-Themed Edition: Features the fast-paced Dobble (Spot It!) matching card game inspired by the…",
"longDesc": "One Piece-Themed Edition: Features the fast-paced Dobble (Spot It!) matching card game inspired by the popular One Piece series. Portable Tin Packaging: Comes in a round, compact metal tin featuring Monkey D. Luffy on the lid for convenient storage and portability. Character-Themed Cards: Includes circular cards featuring One Piece characters, symbols, and motifs such as Luffy, Nami, Boa Hancock, pirate flags, and wanted posters. Fast-Paced Matching Gameplay: Challenge players to spot the single matching symbol between any two cards as quickly as possible.",
"feats": [
"Material: Cardboard Paper",
"Lead time: ~14 days",
"MOQ 25 units"
],
"img": "assets/holiday/p118.jpg",
"tier": "Signature"
},
{
"id": "h119",
"name": "Spot it! Dobble Marvel Emojis Card Game",
"cat": "Games & Toys",
"brand": "Satyam Stationers",
"price": 319.2,
"mrp": 399,
"moq": 25,
"desc": "Marvel-Themed Edition: Combines the classic Spot It! observation game with iconic Marvel superheroes in a…",
"longDesc": "Marvel-Themed Edition: Combines the classic Spot It! observation game with iconic Marvel superheroes in a fun, family-friendly format. Emoji-Style Characters: Features beloved Marvel characters, including Iron Man, Captain America, and Black Widow, illustrated in adorable emoji form. Fast-Paced Matching Gameplay: Challenge your observation skills and reflexes by spotting the single matching symbol between two cards as quickly as possible. Five Game Modes: Offers five different ways to play, providing variety and encouraging players to discover their favourite modes. Family Entertainment: Suitable for family game nights, challenging players to identify matching symbols and call them out quickly.",
"feats": [
"Material: Cardboard Paper",
"Lead time: ~14 days",
"MOQ 25 units"
],
"img": "assets/holiday/p119.jpg",
"tier": "Signature"
},
{
"id": "h120",
"name": "Blah Bleh Bleu",
"cat": "Games & Toys",
"brand": "Factor Notes",
"price": 639.2,
"mrp": 799,
"moq": 25,
"desc": "64 Conversation Cards: Includes 64 thoughtfully designed cards featuring engaging prompts to spark…",
"longDesc": "64 Conversation Cards: Includes 64 thoughtfully designed cards featuring engaging prompts to spark meaningful conversations. Illustrated Designs: Each card features creative illustrations and fun conversation starters for an enjoyable experience. Versatile for Gatherings: Ideal for family gatherings, parties, casual hangouts, and quality time with friends. Thoughtful Gifting Option: A unique gift for friends, family members, or partners to encourage deeper connections and create lasting memories.",
"feats": [
"Material: Paper",
"Lead time: ~14 days",
"MOQ 25 units"
],
"img": "assets/holiday/p120.jpg",
"tier": "Signature"
},
{
"id": "h121",
"name": "Start Where You Are",
"cat": "Notebooks",
"brand": "Penguin",
"price": 600.0,
"mrp": 750,
"moq": 25,
"desc": "Interactive Self-Discovery Journal: Encourages creativity, mindfulness, and self-motivation through guided…",
"longDesc": "Interactive Self-Discovery Journal: Encourages creativity, mindfulness, and self-motivation through guided reflection and engaging activities. Reflective Prompts & Exercises: Features supportive prompts and exercises for writing, drawing, chart-making, and exploring personal goals and dreams. Inspirational Quotes: Includes thought-provoking quotes from writers, artists, and visionaries to inspire self-reflection and positive change. Vibrant Illustrations: Showcases colourful hand-lettering and expressive artwork by Meera Lee Patel. Personal Growth & Mindfulness: Helps readers navigate everyday challenges, develop self-awareness, and appreciate the world around them. Thoughtful Gift & Keepsake: A meaningful gift for anyone interested in creativity, personal development, mindfulness, and self-discovery.",
"feats": [
"Material: Paper",
"Lead time: ~14 days",
"MOQ 25 units"
],
"badge": "Top Rated",
"icon": "⭐",
"img": "assets/holiday/p121.jpg",
"tier": "Signature"
},
{
"id": "h122",
"name": "The Sober Stoic Journal",
"cat": "Notebooks",
"brand": "White Arrow Books",
"price": 263.2,
"mrp": 329,
"moq": 25,
"desc": "365-Day Guided Journal: Encourages intentional, sober living through daily journaling, mindfulness, and…",
"longDesc": "365-Day Guided Journal: Encourages intentional, sober living through daily journaling, mindfulness, and practical reflection inspired by Stoic philosophy. Timeless Stoic Wisdom: Features quotes and insights from renowned philosophers, including Marcus Aurelius, Epictetus, and Seneca. Daily Prompts & Exercises: Includes guided questions and actionable exercises to explore emotions, habits, personal challenges, and progress. Dedicated Reflection Space: Provides room to record thoughts, recognise patterns, and reflect on personal growth. 21-Day Return Track: Offers additional guided entries to help readers reconnect with their journaling routine after missed days. Mindfulness & Self-Awareness: Encourages emotional awareness, self-control, resilience, discipline, and thoughtful decision-making. Practical Stoic Philosophy: Translates timeless Stoic principles into actionable lessons for everyday life without requiring prior knowledge of philosophy. Ideal for Personal Growth: Suitable for readers interested in sober living, Stoicism, mindfulness, and structured self-reflection.",
"feats": [
"Material: Paper",
"Lead time: ~14 days",
"MOQ 25 units"
],
"img": "assets/holiday/p122.jpg",
"tier": "Signature"
},
{
"id": "h123",
"name": "Four Thousand Weeks: Embrace your limits",
"cat": "Notebooks",
"brand": "Vintage",
"price": 1704.0,
"mrp": 2130,
"moq": 25,
"desc": "Bestselling Book: Four Thousand Weeks by Oliver Burkeman explores how to build a meaningful life by…",
"longDesc": "Bestselling Book: Four Thousand Weeks by Oliver Burkeman explores how to build a meaningful life by embracing the limits of time. Time Management & Prioritisation: Challenges the obsession with productivity and getting everything done, encouraging readers to focus on what truly matters. Philosophical Insights: Draws on ideas from ancient and contemporary philosophers, psychologists, and spiritual teachers to offer a fresh perspective on life and time. Mindful Living: Encourages readers to accept life's limitations, let go of unrealistic expectations, and make more intentional choices. Practical Perspective: Offers thought-provoking insights to help readers rethink their relationship with time, productivity, and personal fulfilment. Thoughtful Gift Option: An inspiring read for anyone interested in personal growth, mindfulness, productivity, and living a more meaningful life.",
"feats": [
"Material: Paper",
"Lead time: ~14 days",
"MOQ 25 units"
],
"img": "assets/holiday/p123.jpg",
"tier": "Prestige"
},
{
"id": "h124",
"name": "The Things You Can See Only When You Slow Down",
"cat": "Notebooks",
"brand": "Penguin Life",
"price": 1100.8,
"mrp": 1376,
"moq": 25,
"desc": "THE INTERNATIONAL BESTSELLER",
"longDesc": "THE INTERNATIONAL BESTSELLER Full of anecdotes, relatable quotes and beautiful illustrations, this little book makes a wonderful read and thoughtful gift! 'Is it the world that's busy, or my mind?' Life moves fast, but that doesn't mean we have to. In this timely guide to mindfulness, Haemin Sunim, a Buddhist monk born in Korea and educated in the United States, offers advice on everything from handling setbacks to dealing with rest and relationships. Combining his teachings with calming full-colour illustrations, Haemin Sunim's simple messages speak directly to the anxieties that have become part of modern life and remind us of the strength and joy that come from slowing down. 'Everyone who wants to thrive more in their life should have it on their nightstand' Arianna Huffington 'Offers practical advice on everything from handling setbacks to relationships. Best for reclaiming your zen",
"feats": [
"Material: Paper",
"Lead time: ~14 days",
"MOQ 25 units"
],
"img": "assets/holiday/p124.jpg",
"tier": "Elite"
},
{
"id": "h125",
"name": "OMG Hooded Sweatshirt",
"cat": "Jackets & Hoodies",
"brand": "OMG",
"price": 2549.0,
"mrp": 2750,
"moq": 100,
"desc": "Made from 100% cotton for a soft and comfortable feel",
"longDesc": "Made from 100% cotton for a soft and comfortable feel Compacted, washed, and pre-shrunk for long-lasting durability and a reliable fit Adjustable drawstring hood adds both style and practicality Designed for casual comfort and everyday versatility",
"feats": [
"Material: Cotton",
"Colour: Pink",
"Sizes: XS, S, M, L, XL, 2XL, 3XL",
"Lead time: ~14 days",
"MOQ 100 units"
],
"img": "assets/holiday/p125.jpg",
"img2": "https://cdn.store.link/products/store18473/unz5hv-csun-0010-xs.png?versionId=UHSPuzhMXVHVyeZDnSkbOmiDpGpwxvW3",
"tier": "Pinnacle"
},
{
"id": "h126",
"name": "OMG Classic No Zip Hoodie",
"cat": "Jackets & Hoodies",
"brand": "OMG",
"price": 3799.0,
"mrp": 3800,
"moq": 100,
"desc": "Made from 65% recycled cotton and 35% recycled polyester",
"longDesc": "Made from 65% recycled cotton and 35% recycled polyester Designed for casual comfort and everyday versatility Ideal for layering or wearing on its own in any season",
"feats": [
"Material: Cotton , Polyester",
"Colour: Green",
"Sizes: XS, S, M, L, XL, 2XL, 3XL",
"Lead time: ~21 days",
"MOQ 100 units"
],
"img": "assets/holiday/p126.jpg",
"img2": "https://cdn.store.link/products/store18473/o-61w3-csun-3764.png?versionId=SnroebzquyZ9hOtcZiMnfM0Qc5D1Lhep",
"tier": "Pinnacle"
},
{
"id": "h127",
"name": "ET-TU Sweatshirt",
"cat": "Jackets & Hoodies",
"brand": "ET-TU",
"price": 5099.0,
"mrp": null,
"moq": 100,
"desc": "Composition: 60% recycled cotton, 36% recycled polyester, 4% spandex",
"longDesc": "Composition: 60% recycled cotton, 36% recycled polyester, 4% spandex Soft and durable material Ideal for casual or active wear needs",
"feats": [
"Material: Cotton , Polyester , Spandex",
"Colour: Blue",
"Sizes: XS, S, M, L, XL, 2XL, 3XL",
"Lead time: ~21 days",
"MOQ 100 units"
],
"img": "assets/holiday/p127.jpg",
"img2": "https://cdn.store.link/products/store18473/v6jj5w-et-tu%20sweatshirt.png?versionId=gt6xZBsRf08zy.m87ZMMfD.oU_nJxTUm",
"tier": "Pinnacle"
},
{
"id": "h128",
"name": "ET-TU MOD 2 Zip Hoodie",
"cat": "Jackets & Hoodies",
"brand": "ET-TU",
"price": 6249.0,
"mrp": 6250,
"moq": 100,
"desc": "A must-have hoodie for everyday comfort",
"longDesc": "A must-have hoodie for everyday comfort Made from soft, naturally breathable fabric Designed to keep you warm Offers breathability for all-day wear Includes technical stretch for added flexibility Fabric composition: 50% Cotton, 50% Modal",
"feats": [
"Material: Cotton , Modal",
"Colour: Teal Blue",
"Sizes: XS, S, M, L, XL, 2XL, 3XL, 4XL, 5XL",
"Lead time: ~21 days",
"MOQ 100 units"
],
"img": "assets/holiday/p128.jpg",
"img2": "https://cdn.store.link/products/store18473/l6vlsa-csun-1593.png?versionId=d2R1IOR8A.Yw8IpMzvtAsITvxpyZ4Sh8",
"tier": "Pinnacle"
},
{
"id": "h129",
"name": "ET-TU Hoodie Without Zip",
"cat": "Jackets & Hoodies",
"brand": "ET-TU",
"price": 3799.0,
"mrp": 3800,
"moq": 100,
"desc": "Made from 65% recycled cotton and 35% recycled polyester",
"longDesc": "Made from 65% recycled cotton and 35% recycled polyester Designed for casual comfort and everyday versatility Ideal for layering or wearing on its own in any season",
"feats": [
"Material: Cotton , Polyester",
"Colour: Bone",
"Sizes: XS, S, M, L, XL, 2XL, 3XL",
"Lead time: ~21 days",
"MOQ 100 units"
],
"img": "assets/holiday/p129.jpg",
"img2": "https://cdn.store.link/products/store18473/vh-6-p-et-tu-unisex-recycled-no-zip-hooodie---black.jpg?versionId=.he4m6oW0_PwQSt4xEL8qxRKBxB5h45l",
"tier": "Pinnacle"
},
{
"id": "h130",
"name": "Mayfair Soiree Home Duo",
"cat": "Wellness",
"brand": "Kimirica",
"price": 2158.4,
"mrp": 2698,
"moq": 10,
"desc": "Features the Mayfair Soiree Home Duo, combining vibrant charm with polished sophistication for an elevated…",
"longDesc": "Features the Mayfair Soiree Home Duo, combining vibrant charm with polished sophistication for an elevated home experience. Includes a sleek metal hand caddy set featuring Orange Rind & Cedar Body & Hand Wash and Body & Hand Lotion. Gently cleanses, nourishes, and delicately fragrances the skin, adding a touch of luxury to everyday self-care. Comes with a Mayfair Soiree Reed Diffuser that infuses the space with refreshing orange rind notes balanced by grounding cedar aromas. Creates a welcoming, refreshing, and elegant ambience, perfect for bathrooms, vanity spaces, and living areas. Combines premium presentation with a harmonious fragrance profile, making it an ideal housewarming gift for stylish homes and elevated everyday rituals.",
"feats": [
"Material: Essential Oil",
"Colour: Custom",
"MOQ 10 units"
],
"badge": "Top Rated",
"icon": "⭐",
"img": "assets/holiday/p130.jpg",
"tier": "Supreme"
},
{
"id": "h131",
"name": "The Gulistan Indulgence Set 5 in 1",
"cat": "Wellness",
"brand": "Kimirica",
"price": 1359.2,
"mrp": 1699,
"moq": 10,
"desc": "Give yourself the royal treatment you deserve with The Gulistan Indulgence Set. Inspired by the ancient…",
"longDesc": "Give yourself the royal treatment you deserve with The Gulistan Indulgence Set. Inspired by the ancient bathing rituals of Kings and - Queens, this collection elevates your bathing routine with the majestic notes of Rose Absolute and Iris while soothing Organic Rose Water, -  Ginkgo Biloba & White Tea Extracts promote healthy, youthful skin. The Gulistan collection is an ode to the Queen Of Flowers and an - invitation to indulge yourself, or anyone you love, with an all-encompassing royal bath experience.",
"feats": [
"Material: Top Note - Rose Absolute Middle Note - Tuberose & Iris Base Note - Black Pepper & Cardamom",
"Colour: Custom",
"MOQ 10 units"
],
"badge": "Top Rated",
"icon": "⭐",
"img": "assets/holiday/p131.jpg",
"tier": "Elite"
},
{
"id": "h132",
"name": "The Gentleman Bath Care Trio",
"cat": "Wellness",
"brand": "Kimirica",
"price": 639.0,
"mrp": 799,
"moq": 10,
"desc": "Gentleman Bath Care Trio featuring a refined selection of grooming essentials designed for the modern man.",
"longDesc": "Gentleman Bath Care Trio featuring a refined selection of grooming essentials designed for the modern man. Includes travel-friendly, multipurpose self-care products suitable for head-to-toe grooming. Formulated to refresh, restore, and enhance everyday personal care routines. Infused with classic musk and amber fragrance notes for a warm, sophisticated, and long-lasting scent experience. Compact and travel-ready design makes it convenient for use on the go, during business trips, or while travelling. Ideal for daily grooming, refreshing after a busy day, or enjoying a relaxing bedtime routine. A thoughtful gifting option for birthdays, corporate gifting, festive occasions, and the modern gentleman.",
"feats": [
"Colour: Custom",
"MOQ 10 units"
],
"badge": "Top Rated",
"icon": "⭐",
"img": "assets/holiday/p132.jpg",
"tier": "Signature"
},
{
"id": "h133",
"name": "Jaravik 20 Sets DIY 3D Sticker Book",
"cat": "Wellness",
"brand": "Generic",
"price": 479.2,
"mrp": 599,
"moq": 10,
"desc": "Includes 50 sheets for creating fun 3D mini scenes, such as a supermarket, coffee shop, bookstore, and…",
"longDesc": "Includes 50 sheets for creating fun 3D mini scenes, such as a supermarket, coffee shop, bookstore, and mini house. Comes with 20 scene background cards and 30 PET sticker sheets featuring a variety of characters, props, and decorative elements. Made from high-quality, non-toxic paper and PVC materials with vibrant prints and a smooth finish. Peel-and-stick stickers can be easily repositioned on smooth surfaces for flexible and reusable scene-building. Includes a tweezer tool for convenient and precise sticker placement. Encourages creativity, imagination, and hands-on engagement through screen-free crafting activities. Suitable for journaling, scrapbooking, and decorating phones, laptops, and other personal items. Ideal for children and adults, making it a thoughtful gift for birthdays and other special occasions.",
"feats": [
"Material: Polyvinyl Chloride",
"Colour: Custom",
"MOQ 10 units"
],
"badge": "Top Rated",
"icon": "⭐",
"img": "assets/holiday/p133.jpg",
"tier": "Signature"
},
{
"id": "h134",
"name": "Cheese Board With Cheese Knife And Fork",
"cat": "Home Essentials",
"brand": "Nestasia",
"price": 1240.0,
"mrp": 1550,
"moq": 10,
"desc": "Beautifully crafted from 100% premium acacia wood, featuring natural grain patterns in warm honey and deep…",
"longDesc": "Beautifully crafted from 100% premium acacia wood, featuring natural grain patterns in warm honey and deep brown tones. Rectangular design with smooth, rounded corners offers a refined blend of rustic charm and contemporary elegance. Includes a stainless steel cheese fork and a pointed cheese knife, both featuring sturdy wooden handles. Integrated grooves keep the cheese fork and knife neatly stored for convenient access and clutter-free presentation. Durable and naturally resistant acacia wood provides a sturdy, long-lasting surface for serving cheeses, charcuterie, and appetisers. Smooth finish supports easy cleaning and maintenance while offering an elegant serving surface. Spacious design allows creative presentation of cheeses, bruschetta, antipasti, fruits, and other appetisers. Easy to maintain by wiping with a damp cloth and allowing it to air dry. Ideal for hosting gatherings, everyday entertaining, festive occasions, and premium gifting.",
"feats": [
"Material: Acacia wood, stainless steel",
"Colour: Custom",
"MOQ 10 units"
],
"badge": "Top Rated",
"icon": "⭐",
"img": "assets/holiday/p134.jpg",
"tier": "Elite"
},
{
"id": "h135",
"name": "Lavender Lane Gratitude Journal",
"cat": "Wellness",
"brand": "Off Grid",
"price": 1439.2,
"mrp": 1799,
"moq": 10,
"desc": "Daily morning and night routines to practice gratitude.",
"longDesc": "Daily morning and night routines to practice gratitude. Inspiring daily affirmations and mottos. Undated (yay) pages to fill out at your own pace. Weekly Gratitude challenges.",
"feats": [
"Material: Paper",
"Colour: Custom",
"MOQ 10 units"
],
"badge": "Top Rated",
"icon": "⭐",
"img": null,
"tier": "Elite"
},
{
"id": "h136",
"name": "TriFusion",
"cat": "Gadget & Tech",
"brand": "Portronics",
"price": 2399.2,
"mrp": 2999,
"moq": 25,
"desc": "Features a 15W wireless charging pad for convenient charging of compatible devices.",
"longDesc": "Features a 15W wireless charging pad for convenient charging of compatible devices. Delivers powerful 16W audio output with clear vocals and rich, dynamic sound. Provides up to 5 hours of continuous music playback. Includes a built-in white noise feature to create a soothing environment for relaxation and better sleep. Equipped with a digital alarm clock featuring a clear, user-friendly display. Supports multiple playback options through USB drive, AUX IN, and TF card connectivity. Features TWS connectivity, allowing two speakers to be paired for an enhanced True Wireless Stereo experience. Comes with intuitive controls for power, lighting, volume adjustment, and song navigation. Combines wireless charging, music playback, white noise, and alarm clock functionality in one versatile device.",
"feats": [
"Colour: Black",
"MOQ 25 units"
],
"badge": "Top Rated",
"icon": "⭐",
"img": "assets/holiday/p136.jpg",
"tier": "Supreme"
},
{
"id": "h137",
"name": "PEN-SKETCH PORTRAITS",
"cat": "Home Essentials",
"brand": "Loaves & Fish",
"price": null,
"mrp": null,
"moq": 1,
"desc": "Artwork size: A4.",
"longDesc": "Artwork size: A4. Created using ink pen on paper. Available in framed and unframed options. Requires one clear photograph per artwork as input. Minimum order quantity: 1 artwork. Production capacity of up to 8 artworks per day. A digital proof is shared for approval before the drawing process begins. Shipping charges are applicable separately. Made in Chennai. MOQ and TAT is subject to the order and Quantity.",
"feats": [
"Colour: Custom",
"MOQ 1 units"
],
"img": null
}
];
