#!/usr/bin/env python3
"""SoOptimal Contracting static site generator.
Edit CONFIG below, then run:  python3 build.py   -> writes ./site
Add a service or city by adding one entry to SERVICES or AREAS."""
import json, os, html, datetime

# ----------------------------------------------------------------- CONFIG
CONFIG = dict(
    name="SoOptimal Contracting",
    domain="https://sooptimal.com",
    phone_display="(343) 305-1787",
    phone_tel="+13433051787",
    email="fernandconstructions@sooptimal.com",
    base_city="Kitchener-Waterloo",
    hours=[("Mon to Fri", "7:00 am to 6:00 pm"), ("Saturday", "8:00 am to 4:00 pm"), ("Sunday", "Closed")],
    # Trust badges. Flip to True ONLY when you hold the paperwork.
    insured=True,       # commercial general liability policy in force
    wsib=True,          # WSIB clearance certificate available
    since=2019,         # year you started drywall work
    # Quote form posts here. FormSubmit emails each lead to this address (activate once from the first test email).
    form_endpoint="https://formsubmit.co/fernandconstructions@sooptimal.com",
    google_reviews_url="",   # paste your Google Business Profile review link
    # Tracking. Leave blank to ship without it.
    ga4_id="",          # e.g. G-XXXXXXXXXX
    gads_id="",         # e.g. AW-123456789
    gads_form_label="", # conversion label for quote form
    gads_call_label="", # conversion label for phone clicks
)
C = CONFIG
TODAY = datetime.date.today().isoformat()

# ----------------------------------------------------------------- CONTENT
SERVICES = [
 dict(slug="drywall-repair", nav="Drywall repair", h1="Drywall repair in Kitchener-Waterloo",
  title="Drywall Repair Kitchener-Waterloo | Holes, Cracks, Water Damage",
  desc="Drywall repair in Kitchener, Waterloo, Cambridge and Guelph. Holes, cracks, water damage and ceiling patches fixed and finished so the repair disappears under paint. Free quote from photos.",
  lead="Holes, cracks, water stains, torn paper and bad old patches. We cut out what is damaged, rebuild it, and finish it flat so you cannot find the repair once it is painted.",
  img="kitchen-wall-damage-before", alt="Kitchen wall with gouged drywall and removed fixtures before repair",
  img2="drywall-patch-mudding-in-progress", alt2="Drywall patches coated with joint compound during a kitchen wall repair",
  includes=["Doorknob holes, anchor holes and impact damage","Stress cracks and popped screws","Water-damaged sections cut out and replaced","Torn drywall paper sealed before coating so it does not bubble","Ceiling patches after plumbing or electrical work","Sanding, priming and paint touch-up or full repaint"],
  steps=[("Photos or a visit","Text us photos of the damage. Most repairs can be quoted the same day from pictures and rough measurements."),("Cut out and rebuild","Loose and wet material comes out. New board goes in on solid backing, not a mesh patch over a hole."),("Three coats, feathered wide","Tape coat, fill coat and finish coat, each one wider than the last, so there is no ridge to catch the light."),("Prime and paint","Patches are spot-primed so they do not flash through the topcoat. We can paint the wall or the whole room.")],
  faq=[("Can you quote a drywall repair from photos?","Yes. Send two or three photos and the approximate size of the damage by text to %s. Most small and medium repairs get a firm price from photos. Water damage and ceilings sometimes need a visit first." % C["phone_display"]),
       ("How long does a drywall repair take?","A typical patch needs three coats of compound with drying time between them. Small repairs are usually done in one to two visits using fast-setting compound. Larger sections take two to three days including primer and paint."),
       ("Will I be able to see the patch afterward?","A patch shows when it is not feathered wide enough or not primed. We feather each coat well past the repair and prime before paint. On walls with sheen or strong side light we recommend painting the full wall, corner to corner."),
       ("Do you paint after the repair?","Yes. Repair and paint by the same contractor is the main reason people call us. You get one quote and one visit schedule instead of booking two trades.")]),
 dict(slug="drywall-installation", nav="Drywall installation", h1="Drywall installation for basements, additions and renovations",
  title="Drywall Installation Kitchener-Waterloo | Basements, Additions, Renovations",
  desc="Drywall installation in Kitchener, Waterloo, Cambridge and Guelph. Basements, additions, bathrooms and renovation walls boarded, taped and finished. Moisture-resistant and cement board for wet areas.",
  lead="We hang board on walls and ceilings, including vaulted ceilings, bulkheads and wet areas, then tape and finish it ready for paint. Drywall is the trade this business started in.",
  img="vaulted-addition-drywall-hung", alt="Addition with drywall hung on walls and vaulted ceiling",
  img2="basement-drywall-taping", alt2="Basement with drywall installed and first coat of tape on the joints",
  includes=["Basements, additions, garages and renovation walls","Ceilings, vaulted ceilings and bulkheads around ductwork","Moisture-resistant board in bathrooms and laundry rooms","Cement board in showers and tub surrounds, ready for tile","Taping, finishing and sanding to Level 4 or Level 5","Primer and paint on request, so the room is finished by one contractor"],
  steps=[("Measure and quote","We measure the space or work from your drawings and quote board, labour and finishing as separate lines."),("Hang the board","Ceilings first, then walls. Joints are staggered and kept away from door and window corners where cracks start."),("Tape and finish","Three coats on every joint and screw, with corner bead on outside corners."),("Sand, check and hand over","Sanded and checked under a raking light. Ready for your painter, or we prime and paint it.")],
  faq=[("How much does drywall installation cost?","Price depends on the square footage of board, ceiling height, how many corners and bulkheads there are, and the finish level. Send the room sizes or drawings and you get a written quote with board, labour and finishing listed separately."),
       ("Do you supply the drywall?","Yes. We can supply and deliver the board and materials, or install material you have already bought."),
       ("Which board goes in a bathroom?","Moisture-resistant drywall on bathroom walls and ceilings, and cement board behind tile in showers and tub surrounds. Regular drywall should not go behind shower tile."),
       ("Can you do just the boarding, or just the taping?","Yes. We take full install-and-finish jobs, boarding only, or taping and finishing after someone else has hung the board.")]),
 dict(slug="plaster-repair", nav="Plaster repair", h1="Plaster repair for older Ontario homes",
  title="Plaster Repair Kitchener-Waterloo | Cracks, Loose Plaster, Skim Coating",
  desc="Plaster wall and ceiling repair in Kitchener, Waterloo, Cambridge and Guelph. Cracks, loose and bulging plaster, failed patches and skim coating over rough walls. Free quote.",
  lead="Plaster cracks, bulges and crumbling corners can usually be saved. We stabilise what is sound, rebuild what is not, and skim the surface so the wall reads as one flat plane again.",
  img="bathroom-ceiling-skim-coat", alt="Bathroom ceiling above a tiled shower being skim coated",
  img2="bathroom-drywall-edge-before", alt2="Damaged wall edge beside new shower tile before repair",
  includes=["Hairline and structural cracks opened, taped and filled","Loose or bulging plaster re-secured or cut out","Holes filled back level with the surrounding wall","Skim coating over rough, patched or wallpaper-damaged walls","Blending new drywall into existing plaster","Ceilings, corners and around tub and shower surrounds"],
  steps=[("Check what is still solid","We press and tap the wall to find where plaster has let go of the lath. Sound plaster stays."),("Stabilise or remove","Loose areas are re-fastened or cut back to a firm edge. Cracks are opened so the filler has something to grip."),("Rebuild and tape","Deep areas are filled with setting compound in lifts. Cracks get tape so they do not come back with the seasons."),("Skim and finish","A thin coat over the whole area hides the transition between old and new. Then primer and paint.")],
  faq=[("Should I repair plaster or replace it with drywall?","If most of the plaster is still tight to the wall, repair is faster, cleaner and cheaper than tearing it out. Replacement makes sense when large areas have come loose or the wall is being opened anyway for wiring or insulation."),
       ("Why do my plaster cracks keep coming back?","Filler alone does not stop a crack that moves with humidity. The crack needs to be opened, taped and coated wide. We do that on every crack repair."),
       ("What is skim coating?","Skim coating is a thin layer of compound trowelled over an entire wall or ceiling to make a rough or patchy surface smooth. It is the fix for walls damaged by wallpaper removal, many old patches, or uneven texture."),
       ("Is the work dusty?","Sanding makes dust. We close off the room, cover floors and furniture, and clean up before we leave. Wet sanding is used where it makes sense.")]),
 dict(slug="interior-painting", nav="Interior painting", h1="Interior painting in Kitchener-Waterloo",
  title="Interior Painters Kitchener-Waterloo | Walls, Ceilings, Trim, Doors",
  desc="Interior painting in Kitchener, Waterloo, Cambridge and Guelph. Walls, ceilings, trim and doors, with wall repairs done properly before any paint goes on. Free written quote.",
  lead="Paint only looks as good as the wall under it. We fix dents, cracks and old patches first, then cut clean lines and roll an even finish on walls, ceilings, trim and doors.",
  img="living-room-repaint-finished", alt="Freshly painted empty living room with clean white baseboards",
  img2="bedroom-doors-trim-painted", alt2="Bedroom with freshly painted walls, doors and trim",
  includes=["Walls, ceilings, baseboards, door frames and doors","Dents, nail holes and cracks filled and sanded before paint","Stain-blocking primer over water marks and smoke","Two finish coats as standard","Floors and fixtures covered, edges taped, switch plates removed","Single rooms, whole homes, condos and rental units"],
  steps=[("Walk through and quote","You tell us which rooms and surfaces. You get a written price that lists what is included."),("Protect and prep","Floors covered, furniture moved or wrapped, holes filled, repairs sanded and primed."),("Cut and roll","Ceilings first, then walls, then trim and doors. Two coats on everything."),("Walk through together","We check every room with you in daylight and touch up anything you point at before we pack up.")],
  faq=[("Do you supply the paint?","Yes, or you can supply your own. The quote shows paint as a separate line so you can see the difference."),
       ("Do I have to move my furniture?","Small items and anything fragile, yes please. We move large furniture to the centre of the room and cover it."),
       ("How long does it take to paint a room?","One average bedroom with walls, ceiling and trim is normally a one-day job including minor repairs. A full apartment or main floor is usually two to four days."),
       ("Can you match the existing colour for touch-ups?","Often, if you have the original paint or colour code. Paint fades and sheen changes over time, so on older walls we recommend repainting the full wall rather than spotting.")]),
 dict(slug="drywall-taping-finishing", nav="Taping and finishing", h1="Drywall taping, mudding and finishing",
  title="Drywall Taping & Mudding Kitchener-Waterloo | Level 4 and Level 5 Finish",
  desc="Drywall taping, mudding and sanding in Kitchener, Waterloo, Cambridge and Guelph. Basements, additions and renovations finished to Level 4 or Level 5, ready for paint.",
  lead="Board is up and you need it finished. We tape, coat and sand basements, additions and renovation walls to a Level 4 or Level 5 finish, and we can prime and paint it too.",
  img="wall-patch-primed-in-progress", alt="Wall section coated and sanded with baseboards masked in green painter's tape",
  img2="kitchen-backsplash-wall-before", alt2="Kitchen wall with removed backsplash and exposed drywall before refinishing",
  includes=["Taping and three-coat finishing of new board","Level 4 finish for flat and matte paint","Level 5 skim for gloss paint and strong side light","Corner bead, inside corners and ceiling joints","Small board hanging to close up renovation openings","Primer and paint on request"],
  steps=[("Scope the finish level","We look at the room, the lighting and the paint you plan to use, and recommend Level 4 or Level 5."),("Tape and bed","Paper tape on flats and inside corners, bead on outside corners."),("Fill and finish coats","Each coat wider than the one before, with full drying time between."),("Sand and check with light","We sand, then check every wall with a raking light and fix what shows before primer.")],
  faq=[("What is the difference between a Level 4 and Level 5 finish?","Level 4 is taped joints with three coats of compound, sanded smooth. It suits flat and matte paint. Level 5 adds a thin skim coat over the entire surface, which hides joints under glossy paint or strong window light."),
       ("Do you hang drywall as well?","We hang board for repairs, small rooms and closing up renovation openings. For large new-build boarding we finish after your boarder."),
       ("How long does taping a basement take?","Most basements take four to six working days for tape, three coats and sanding, mostly because each coat needs to dry."),
       ("Can you fix another contractor's taping?","Yes. Visible seams, ridges and bubbled tape can usually be corrected with re-taping where needed and a skim coat.")]),
 dict(slug="apartment-turnover-painting", nav="Rental unit turnovers", h1="Apartment turnover painting and repairs",
  title="Apartment Turnover Painting & Drywall Repair | Property Managers, Ontario",
  desc="Unit turnover painting and drywall repair for property managers and landlords in Kitchener-Waterloo, Cambridge, Guelph and Kingston. Per-unit pricing, photo reports, fast turnaround.",
  lead="A vacant unit earns nothing. We repair the walls, paint the unit and hand it back ready to show, with a fixed price per unit and dated photos of every room before and after.",
  img="hallway-kitchen-finished", alt="Painted apartment hallway and kitchen ready for a new tenant",
  img2="bedroom-repaint-finished", alt2="Repainted apartment bedroom with white door and baseboards",
  includes=["Fixed per-unit pricing by bedroom count","Tenant damage repaired: holes, anchors, gouges, torn paper","Walls, ceilings, doors, frames and baseboards painted","Repairs after plumbing, electrical and tile trades","Before and after photos of every room with each invoice","One unit or a full floor, scheduled around your move-in dates"],
  steps=[("Send the unit list","Unit numbers, bedroom counts and move-in dates. We reply with a per-unit price and a start date."),("Document the unit","We photograph every room before touching it, so damage beyond normal wear is on record for you."),("Repair and paint","Walls repaired first, then ceilings, walls, trim and doors in your standard colours."),("Hand back with a report","You get after photos and one invoice per unit that lists the base scope and any extras separately.")],
  faq=[("How is turnover work priced?","By unit size. A base price covers a standard repaint and normal wear repairs for a one, two or three bedroom unit. Damage beyond normal wear is listed and priced as a separate line before we do it."),
       ("How fast can you turn a unit?","A standard one or two bedroom unit is normally two to three working days from keys to hand-back. Heavy damage adds time and we tell you on day one."),
       ("Do you work as a subcontractor for larger contractors?","Yes. We currently do painting and drywall subcontract work on multi-unit residential buildings and can invoice per unit with photo documentation."),
       ("Which areas do you cover for multi-unit work?","Kitchener, Waterloo, Cambridge and Guelph, and Kingston for multi-unit projects.")]),
]

AREAS = [
 dict(slug="kitchener", city="Kitchener", title="Painting & Drywall Repair Kitchener | SoOptimal Contracting",
  desc="Kitchener painting contractor for interior painting, drywall repair and plaster repair. Based in Kitchener-Waterloo. Free quotes from photos.",
  body="Kitchener has a real mix of housing. Central neighbourhoods have century homes with original plaster and lath, where cracks and loose ceilings are the common calls. Post-war bungalows often have many layers of paint over old patches. Newer subdivisions and condo towers are all drywall, where the calls are nail pops, settling cracks and repaints.",
  hoods="Downtown, Victoria Park, Forest Heights, Stanley Park, Doon, Huron Park, Country Hills"),
 dict(slug="waterloo", city="Waterloo", title="Painting & Drywall Repair Waterloo, ON | SoOptimal Contracting",
  desc="Waterloo interior painting, drywall repair and rental unit turnovers. Student housing and family homes. Free quotes from photos.",
  body="Waterloo work splits two ways. Around the universities, landlords need student rentals patched and painted in the short gap between leases, usually late April and late August. In family neighbourhoods the calls are repaints, basement finishing and repairs before a house goes on the market.",
  hoods="Uptown, Northdale, Lakeshore, Beechwood, Eastbridge, Laurelwood, Columbia Forest"),
 dict(slug="cambridge", city="Cambridge", title="Painting & Drywall Repair Cambridge, ON | SoOptimal Contracting",
  desc="Cambridge painting and drywall contractor serving Galt, Preston and Hespeler. Plaster repair for older homes, interior painting and drywall repair. Free quotes.",
  body="Galt, Preston and Hespeler each have streets of older brick and stone homes with plaster walls that need a careful hand. Newer areas of Cambridge are standard drywall, where we handle repairs, basement taping and full interior repaints.",
  hoods="Galt, Preston, Hespeler, West Galt, Fiddlesticks, Clemens Mill"),
 dict(slug="guelph", city="Guelph", title="Painting & Drywall Repair Guelph | SoOptimal Contracting",
  desc="Guelph interior painting, drywall repair and plaster repair for homeowners and landlords. Free quotes from photos.",
  body="Guelph's older core has plaster homes that need crack repair and skim coating before paint. The south end and the streets near the university have a lot of rental housing, where owners need quick repairs and repaints between tenants.",
  hoods="Downtown, The Ward, Exhibition Park, Kortright, Westminster Woods, the university area"),
 dict(slug="kingston", city="Kingston", title="Apartment Painting & Drywall Repair Kingston, ON | SoOptimal Contracting",
  desc="Unit turnover painting and drywall repair for multi-unit residential buildings in Kingston, Ontario. Per-unit pricing with photo reports.",
  body="In Kingston we work on multi-unit residential buildings: apartment turnovers, repairs after plumbing and tile trades, and full unit repaints. The photos on this site are from recent Kingston apartment units. For Kingston we take multi-unit and property management projects rather than single small repairs.",
  hoods="Multi-unit residential buildings across the city"),
]

GALLERY = [
 ("living-room-repaint-finished","Living room repainted: walls, ceiling edge and baseboards","After"),
 ("bedroom-repaint-finished","Bedroom repaint with door, frame and baseboards","After"),
 ("hallway-kitchen-finished","Hallway and kitchen bulkhead painted","After"),
 ("bedroom-doors-trim-painted","Closet doors, entry door and trim painted","After"),
 ("entry-hall-finished","Unit entry and hallway finished","After"),
 ("bedroom-finished-closet","Second bedroom finished","After"),
 ("vaulted-addition-drywall-hung","Addition boarded, including the vaulted ceiling","Drywall"),
 ("basement-drywall-taping","Basement boarded with bulkheads, taping under way","Drywall"),
 ("basement-room-drywall-installed","Basement room boarded with moisture-resistant board","Drywall"),
 ("shower-cement-board-installed","Cement board in a shower, ready for tile","Drywall"),
 ("kitchen-wall-damage-before","Kitchen wall: gouges, anchor holes and a removed fixture","Before"),
 ("kitchen-backsplash-wall-before","Wall behind a removed backsplash and cabinet","Before"),
 ("bathroom-wall-hole-before","Open wall beside new shower tile","Before"),
 ("bathroom-drywall-edge-before","Broken drywall edge where new tile meets the old wall","Before"),
 ("drywall-patch-mudding-in-progress","Patches coated and feathered, waiting to dry","During"),
 ("wall-patch-primed-in-progress","Repair sanded and primed, trim masked","During"),
 ("bathroom-ceiling-skim-coat","Bathroom ceiling skim coated above the shower","During"),
 ("kitchen-pass-through-painting","Painting under way, floors covered","During"),
]

HOME_FAQ = [
 ("What does SoOptimal Contracting do?","SoOptimal Contracting is a painting and drywall contractor based in Kitchener-Waterloo, Ontario. Services are interior painting, drywall installation, drywall repair, plaster repair, drywall taping and finishing, and apartment turnover painting for landlords and property managers."),
 ("Which areas do you serve?","Kitchener, Waterloo, Cambridge and Guelph for all services. Kingston, Ontario for multi-unit residential and property management projects."),
 ("How do I get a quote?","Text photos of the job to %s or use the quote form. Most painting and repair jobs get a written price within one business day. Larger jobs get a site visit first. Quotes are free." % C["phone_display"]),
 ("Do you do small jobs?","Yes. A single hole, one cracked ceiling or one room is fine. Small repairs are often quoted from photos and done in one or two visits."),
 ("Can you repair the wall and paint it too?","Yes. Repair and paint are quoted together and done by the same contractor, so the patch is primed and painted properly and you only book one trade."),
 ("Are you insured?","Yes. SoOptimal Contracting carries commercial general liability insurance and WSIB coverage. A certificate of insurance and a WSIB clearance certificate are available on request. The owner is also Working at Heights, aerial lift and WHMIS trained."),
 ("Do you work with landlords and property managers?","Yes. We offer fixed per-unit turnover pricing by bedroom count, with before and after photos of every room attached to each invoice."),
]

# ----------------------------------------------------------------- HELPERS
e = html.escape
def img(name, alt, rel, cls="", eager=False, sizes="(min-width:900px) 50vw, 100vw"):
    return (f'<img class="{cls}" src="{rel}img/{name}-700.webp" srcset="{rel}img/{name}-700.webp 700w, {rel}img/{name}-1400.webp 1400w" '
            f'sizes="{sizes}" alt="{e(alt)}" width="1400" height="1400" ' + ('fetchpriority="high"' if eager else 'loading="lazy" decoding="async"') + '>')

def business_ld():
    d = {"@context":"https://schema.org","@type":["HousePainter","GeneralContractor"],"@id":C["domain"]+"/#business",
      "name":C["name"],"url":C["domain"]+"/","telephone":C["phone_tel"],"email":C["email"],
      "image":C["domain"]+"/img/og.jpg","description":"Painting and drywall contractor based in Kitchener-Waterloo, Ontario: interior painting, drywall installation, drywall repair, plaster repair, taping and finishing, and apartment turnover painting.",
      "address":{"@type":"PostalAddress","addressLocality":"Kitchener","addressRegion":"ON","addressCountry":"CA"},
      "areaServed":[{"@type":"City","name":a["city"]+", Ontario"} for a in AREAS],
      "openingHoursSpecification":[{"@type":"OpeningHoursSpecification","dayOfWeek":["Monday","Tuesday","Wednesday","Thursday","Friday"],"opens":"07:00","closes":"18:00"},
                                    {"@type":"OpeningHoursSpecification","dayOfWeek":"Saturday","opens":"08:00","closes":"16:00"}],
      "hasOfferCatalog":{"@type":"OfferCatalog","name":"Services","itemListElement":[{"@type":"Offer","itemOffered":{"@type":"Service","name":s["nav"],"url":f'{C["domain"]}/{s["slug"]}/'}} for s in SERVICES]}}
    return d
def faq_ld(faq):
    return {"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":q,"acceptedAnswer":{"@type":"Answer","text":a}} for q,a in faq]}
def crumbs_ld(items):
    return {"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":i+1,"name":n,"item":C["domain"]+u} for i,(n,u) in enumerate(items)]}
def ld(*objs):
    return "".join('<script type="application/ld+json">'+json.dumps(o,ensure_ascii=False)+'</script>\n' for o in objs)

def tracking():
    ids=[i for i in (C["ga4_id"],C["gads_id"]) if i]
    if not ids: return ""
    cfg="".join(f"gtag('config','{i}');" for i in ids)
    return (f'<script async src="https://www.googletagmanager.com/gtag/js?id={ids[0]}"></script>'
            f"<script>window.dataLayer=window.dataLayer||[];function gtag(){{dataLayer.push(arguments)}}gtag('js',new Date());{cfg}</script>\n")

def faq_html(faq):
    return '<div class="faq">'+"".join(f'<details><summary>{e(q)}</summary><p>{e(a)}</p></details>' for q,a in faq)+'</div>'

def quote_form(rel, fid="q", heading="Get a free quote", service=None, compact=False):
    opts="".join(f'<option{" selected" if service==s["nav"] else ""}>{e(s["nav"])}</option>' for s in SERVICES)+"<option>Something else</option>"
    cities="".join(f"<option>{a['city']}</option>" for a in AREAS)+"<option>Other</option>"
    return f'''<form class="quote" id="{fid}" name="quote" method="POST" action="{C["form_endpoint"]}" enctype="multipart/form-data">
<input type="hidden" name="_subject" value="New quote request from sooptimal.com"><input type="hidden" name="_next" value="{C["domain"]}/thank-you/"><input type="hidden" name="_captcha" value="false"><input type="hidden" name="_template" value="table">
<h2>{e(heading)}</h2>
<p class="form-note">Written price within one business day. No obligation.</p>
<p class="hp"><label>Leave empty <input name="_honey" tabindex="-1" autocomplete="off"></label></p>
<div class="row"><label for="{fid}-name">Name<input id="{fid}-name" name="name" required autocomplete="name"></label>
<label for="{fid}-phone">Phone<input id="{fid}-phone" name="phone" type="tel" required autocomplete="tel" inputmode="tel"></label></div>
<div class="row"><label for="{fid}-service">What do you need?<select id="{fid}-service" name="service" required>{opts}</select></label>
<label for="{fid}-city">City<select id="{fid}-city" name="city" required>{cities}</select></label></div>
<label for="{fid}-email">Email <span class="opt">optional</span><input id="{fid}-email" name="email" type="email" autocomplete="email"></label>
<label for="{fid}-details">Tell us about the job<textarea id="{fid}-details" name="details" rows="{3 if compact else 4}" placeholder="Rooms, rough sizes, what is damaged, when you need it done"></textarea></label>
<label for="{fid}-photo">Add a photo <span class="opt">optional</span><input id="{fid}-photo" name="attachment" type="file" accept="image/*"></label>
<button class="btn btn-primary" type="submit">Send my quote request</button>
<p class="form-msg" role="status" hidden></p>
<p class="form-alt">Faster: text photos to <a href="sms:{C["phone_tel"]}">{C["phone_display"]}</a></p>
</form>'''

ICON={"shield":'<path d="M12 3l7 3v5c0 4.5-3 8.3-7 10-4-1.7-7-5.5-7-10V6l7-3z"/><path d="M9 12l2 2 4-4"/>',
"doc":'<path d="M7 3h7l5 5v13H7z"/><path d="M14 3v5h5M10 13h6M10 17h6"/>',
"up":'<path d="M5 21V10l7-6 7 6v11"/><path d="M9 21v-6h6v6"/>',
"clock":'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>'}
def trustbar():
    items=[("shield","Liability insured","Certificate sent on request"),("doc","WSIB covered","Clearance certificate available"),
           ("up","Working at Heights","Plus aerial lift and WHMIS"),("clock","Quotes in one business day","Free, written and itemised")]
    return '<section class="trustbar"><div class="wrap"><ul>'+"".join(f'<li><svg viewBox="0 0 24 24" aria-hidden="true">{ICON[i]}</svg><div><b>{a}</b><span>{b}</span></div></li>' for i,a,b in items)+'</ul></div></section>'

def trust_items():
    t=["Free written quotes","Repair and paint by one contractor","Registered Ontario business, HST invoices","Real photos from our own jobs"]
    if C["insured"] and C["wsib"]: t[2]="Liability insured, WSIB covered"
    elif C["insured"]: t[2]="Liability insured"
    return t

def page(path, title, desc, body, rel, extra_ld="", noindex=False, landing=False, og="og.jpg"):
    canon=C["domain"]+path
    nav="" if landing else f'''<nav class="nav" aria-label="Main"><button class="menu" aria-expanded="false" aria-controls="navlinks">Menu</button>
<ul id="navlinks"><li class="has-sub"><a href="{rel}#services">Services</a><ul>{"".join(f'<li><a href="{rel}{s["slug"]}/">{e(s["nav"])}</a></li>' for s in SERVICES)}</ul></li>
<li><a href="{rel}our-work/">Our work</a></li><li><a href="{rel}#areas">Areas</a></li><li><a href="{rel}#faq">FAQ</a></li></ul></nav>'''
    foot=f'''<footer class="foot"><div class="wrap foot-grid">
<div><p class="logo">So<span>Optimal</span> Contracting</p><p>Painting, drywall repair and plaster repair. Based in Kitchener-Waterloo, Ontario.</p>
<p><a class="tel" href="tel:{C["phone_tel"]}">{C["phone_display"]}</a><br><a href="mailto:{C["email"]}">{C["email"]}</a></p></div>
<div><h3>Services</h3><ul>{"".join(f'<li><a href="{rel}{s["slug"]}/">{e(s["nav"])}</a></li>' for s in SERVICES)}</ul></div>
<div><h3>Service areas</h3><ul>{"".join(f'<li><a href="{rel}{a["slug"]}/">{a["city"]}</a></li>' for a in AREAS)}</ul></div>
<div><h3>Hours</h3><ul>{"".join(f"<li>{d}: {h}</li>" for d,h in C["hours"])}</ul><p><a href="{rel}our-work/">Our work</a> · <a href="{rel}free-quote/">Free quote</a></p></div>
</div><div class="wrap legal">© {datetime.date.today().year} {C["name"]}. All rights reserved.</div></footer>'''
    return f'''<!DOCTYPE html>
<html lang="en-CA"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{e(title)}</title>
<meta name="description" content="{e(desc)}">
<link rel="canonical" href="{canon}">
{"<meta name='robots' content='noindex'>" if noindex else ""}
<meta property="og:type" content="website"><meta property="og:title" content="{e(title)}"><meta property="og:description" content="{e(desc)}">
<meta property="og:url" content="{canon}"><meta property="og:image" content="{C["domain"]}/img/{og}"><meta property="og:locale" content="en_CA">
<meta name="twitter:card" content="summary_large_image"><meta name="theme-color" content="#0C1116">
<link rel="icon" href="{rel}favicon.svg" type="image/svg+xml">
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet">
<link rel="stylesheet" href="{rel}style.css">
{tracking()}{ld(business_ld())}{extra_ld}</head>
<body{" class='landing'" if landing else ""}>
<a class="skip" href="#main">Skip to content</a>
<header class="top"><div class="wrap top-in"><a class="logo" href="{rel if rel else './'}" aria-label="{C["name"]} home">So<span>Optimal</span> <small>Contracting</small></a>
{nav}<a class="btn btn-call" href="tel:{C["phone_tel"]}" data-call><span class="hide-s">Call </span>{C["phone_display"]}</a></div></header>
<main id="main">{body}</main>
{foot}
<div class="sticky" role="navigation" aria-label="Quick contact"><a href="tel:{C["phone_tel"]}" data-call>Call</a><a href="sms:{C["phone_tel"]}">Text photos</a><a class="go" href="{rel}free-quote/">Free quote</a></div>
<script>window.SO={json.dumps({k:C[k] for k in ("gads_id","gads_form_label","gads_call_label")})}</script>
<script src="{rel}site.js" defer></script>
</body></html>'''

def cta_band(rel, h="Send photos, get a price", p="Most jobs are quoted within one business day."):
    return f'''<section class="band"><div class="wrap band-in"><div><h2>{e(h)}</h2><p>{e(p)}</p></div>
<div class="band-btns"><a class="btn btn-primary" href="{rel}free-quote/">Get a free quote</a><a class="btn btn-ghost" href="tel:{C["phone_tel"]}" data-call>Call {C["phone_display"]}</a></div></div></section>'''

def write(path, s):
    full=os.path.join("site", path.lstrip("/"))
    if path.endswith("/"): full=os.path.join(full,"index.html")
    os.makedirs(os.path.dirname(full) or ".", exist_ok=True)
    open(full,"w",encoding="utf-8").write(s)

# ----------------------------------------------------------------- PAGES
def home():
    rel=""
    svc="".join(f'''<a class="card photo" href="{s["slug"]}/">{img(s["img"],s["alt"],rel,sizes="(min-width:900px) 30vw, 100vw")}<div><h3>{e(s["nav"])}</h3><p>{e(s["lead"].split(". ")[0])}.</p><span class="more">See details</span></div></a>''' for s in SERVICES)
    areas="".join(f'<li><a href="{a["slug"]}/">{a["city"]}</a></li>' for a in AREAS)
    body=f'''<section class="hero">{img("living-room-finished-wide","",rel,cls="hero-bg",eager=True,sizes="100vw")}<div class="wrap hero-grid"><div class="hero-copy">
<p class="eyebrow">Painting · Drywall · Plaster · {C["base_city"]}</p>
<h1>Walls repaired right, then painted clean.</h1>
<p class="lead">SoOptimal Contracting fixes damaged drywall and plaster and paints interiors for homeowners, landlords and property managers in Kitchener, Waterloo, Cambridge and Guelph. One contractor for the repair and the paint.</p>
<div class="hero-btns"><a class="btn btn-primary" href="#quote">Get a free quote</a><a class="btn btn-ghost" href="sms:{C["phone_tel"]}">Text photos to {C["phone_display"]}</a></div>
<ul class="ticks">{"".join(f"<li>{e(t)}</li>" for t in trust_items())}</ul></div>
<div class="hero-form" id="quote">{quote_form(rel,"hq",compact=True)}</div></div></section>
{trustbar()}

<section class="proof"><div class="wrap"><p class="eyebrow">One apartment unit, October 2026</p><h2>Before, during and after. Same job.</h2>
<div class="tri"><figure>{img("kitchen-wall-damage-before","Kitchen wall with gouges, anchor holes and a removed light fixture before repair",rel,sizes="(min-width:900px) 33vw, 100vw")}<figcaption><b>Before</b> Gouged walls, anchor holes, openings left by other trades.</figcaption></figure>
<figure>{img("drywall-patch-mudding-in-progress","Drywall patches coated with joint compound and feathered wide",rel,sizes="(min-width:900px) 33vw, 100vw")}<figcaption><b>During</b> Damage cut out, rebuilt, coated and feathered wide.</figcaption></figure>
<figure>{img("living-room-repaint-finished","Finished living room with freshly painted walls and white baseboards",rel,sizes="(min-width:900px) 33vw, 100vw")}<figcaption><b>After</b> Primed, two coats, trim cut clean. Ready to hand over.</figcaption></figure></div>
<p><a class="textlink" href="our-work/">See more job photos</a></p></div></section>

<section id="services" class="services"><div class="wrap"><p class="eyebrow">Services</p><h2>What we do</h2><div class="cards">{svc}</div></div></section>

<section class="why"><div class="wrap why-grid"><div><p class="eyebrow">How we work</p><h2>The person who quotes your job does your job.</h2>
<p>SoOptimal is owner-operated. You deal with one person from the first photo to the final walk-through, and that person is on the tools.</p></div>
<ol class="steps"><li><b>Send photos or book a visit</b><span>Text pictures and rough sizes. Bigger jobs get a site visit.</span></li>
<li><b>Get a written price</b><span>The quote lists what is included, what is not, and the start date.</span></li>
<li><b>We protect, repair and paint</b><span>Floors covered, repairs done properly, two coats, daily clean-up.</span></li>
<li><b>Walk through before you pay</b><span>We check every room together and fix anything you point at.</span></li></ol></div></section>

<section class="creds"><div class="wrap why-grid"><div><p class="eyebrow">Who you are hiring</p><h2>Insured, covered and trained for the job.</h2>
<p>SoOptimal Contracting is run by Fernand Havugimana, who has worked in drywall since {C["since"]}, first as an installer and then on commercial and multi-unit renovation sites as a painting and drywall subcontractor. He holds an engineering technology diploma and a BSc, and quotes the way an engineer would: measured, written down and itemised.</p></div>
<ul class="credlist"><li><b>Commercial general liability insurance</b><span>Certificate of insurance sent on request before work starts.</span></li>
<li><b>WSIB coverage</b><span>Clearance certificate available for property managers and contractors.</span></li>
<li><b>Working at Heights certified</b><span>Ontario-approved training for ladders, scaffolds and high ceilings.</span></li>
<li><b>Aerial lift certified</b><span>Trained to operate boom lifts for stairwells, atriums and commercial spaces.</span></li>
<li><b>WHMIS trained</b><span>Safe handling of paints, primers, solvents and compounds.</span></li>
<li><b>Registered Ontario business</b><span>HST-registered. You get a proper invoice for every job.</span></li></ul></div></section>

<section class="pm"><div class="wrap pm-grid">{img("hallway-kitchen-finished","Painted apartment hallway and kitchen ready for a new tenant",rel)}<div><p class="eyebrow">Landlords and property managers</p>
<h2>Vacant units turned around with a fixed price and a photo report.</h2>
<p>Per-unit pricing by bedroom count. Tenant damage repaired, full repaint, dated before and after photos of every room attached to the invoice. One unit or a whole floor.</p>
<a class="btn btn-primary" href="apartment-turnover-painting/">Turnover service details</a></div></div></section>

<section id="areas" class="areas"><div class="wrap"><p class="eyebrow">Service areas</p><h2>Where we work</h2>
<p>Based in Kitchener-Waterloo. All services across Waterloo Region and Guelph. Multi-unit projects in Kingston.</p><ul class="pills">{areas}</ul></div></section>

<section id="faq" class="faqs"><div class="wrap narrow"><p class="eyebrow">Questions</p><h2>Common questions</h2>{faq_html(HOME_FAQ)}</div></section>
{cta_band(rel)}'''
    write("/index.html", page("/", "Painting & Drywall Repair Kitchener-Waterloo | SoOptimal Contracting",
        "Painting contractor in Kitchener-Waterloo for interior painting, drywall repair, plaster repair and rental unit turnovers. Serving Kitchener, Waterloo, Cambridge and Guelph. Free quotes from photos.",
        body, rel, ld(faq_ld(HOME_FAQ), {"@context":"https://schema.org","@type":"WebSite","name":C["name"],"url":C["domain"]+"/"})))

def service_page(s):
    rel="../"
    others="".join(f'<li><a href="{rel}{o["slug"]}/">{e(o["nav"])}</a></li>' for o in SERVICES if o is not s)
    areas=", ".join(f'<a href="{rel}{a["slug"]}/">{a["city"]}</a>' for a in AREAS)
    body=f'''<section class="phero"><div class="wrap hero-grid"><div class="hero-copy"><p class="crumbs"><a href="{rel}">Home</a> / {e(s["nav"])}</p>
<h1>{e(s["h1"])}</h1><p class="lead">{e(s["lead"])}</p>
<div class="hero-btns"><a class="btn btn-primary" href="#quote">Get a free quote</a><a class="btn btn-ghost" href="sms:{C["phone_tel"]}">Text photos to {C["phone_display"]}</a></div></div>
<div class="phero-img">{img(s["img"],s["alt"],rel,eager=True)}</div></div></section>
<section><div class="wrap two"><div><p class="eyebrow">Included</p><h2>What this covers</h2><ul class="checks">{"".join(f"<li>{e(i)}</li>" for i in s["includes"])}</ul>
<p class="muted">Serving {areas}.</p></div><figure>{img(s["img2"],s["alt2"],rel)}<figcaption>Photo from a SoOptimal job.</figcaption></figure></div></section>
<section class="why"><div class="wrap why-grid"><div><p class="eyebrow">Process</p><h2>How the job goes</h2><p>You get a written scope before we start, and the same person on site every day.</p></div>
<ol class="steps">{"".join(f"<li><b>{e(a)}</b><span>{e(b)}</span></li>" for a,b in s["steps"])}</ol></div></section>
<section class="faqs"><div class="wrap two"><div><p class="eyebrow">Questions</p><h2>{e(s["nav"])} FAQ</h2>{faq_html(s["faq"])}
<h3 class="rel-h">Related services</h3><ul class="pills small">{others}</ul></div>
<div id="quote">{quote_form(rel,"sq",service=s["nav"])}</div></div></section>'''
    extra=ld(faq_ld(s["faq"]), crumbs_ld([("Home","/"),(s["nav"],f'/{s["slug"]}/')]),
      {"@context":"https://schema.org","@type":"Service","name":s["nav"],"serviceType":s["nav"],"description":s["desc"],"url":f'{C["domain"]}/{s["slug"]}/',
       "provider":{"@id":C["domain"]+"/#business"},"areaServed":[a["city"]+", Ontario" for a in AREAS]})
    write(f'/{s["slug"]}/', page(f'/{s["slug"]}/', s["title"], s["desc"], body, rel, extra))

def area_page(a):
    rel="../"; city=a["city"]; kingston=a["slug"]=="kingston"
    svcs=[s for s in SERVICES if (not kingston or s["slug"] in ("apartment-turnover-painting","interior-painting","drywall-repair"))]
    cards="".join(f'<a class="card flat" href="{rel}{s["slug"]}/"><div><h3>{e(s["nav"])}</h3><p>{e(s["lead"].split(". ")[0])}.</p><span class="more">Learn more</span></div></a>' for s in svcs)
    faq=[(f"Do you offer free quotes in {city}?", f"Yes. Quotes are free in {city}. Text photos to {C['phone_display']} or use the form on this page and you will normally have a written price within one business day."),
         (f"What services do you offer in {city}?", ("In Kingston we take multi-unit residential work: apartment turnover painting, unit repaints and drywall repair for property managers and contractors." if kingston else f"Interior painting, drywall installation, drywall repair, plaster repair, taping and finishing, and rental unit turnovers for homeowners, landlords and property managers in {city}.")),
         ("Do you repair walls before painting?", "Yes. Every paint job includes filling and sanding dents, holes and cracks. Larger drywall or plaster repairs are quoted on the same estimate.")]
    h1 = "Apartment painting and drywall repair in Kingston" if kingston else f"Painting and drywall repair in {city}"
    body=f'''<section class="phero"><div class="wrap hero-grid"><div class="hero-copy"><p class="crumbs"><a href="{rel}">Home</a> / {city}</p>
<h1>{h1}</h1><p class="lead">{e(a["body"])}</p>
<div class="hero-btns"><a class="btn btn-primary" href="#quote">Get a free quote in {city}</a><a class="btn btn-ghost" href="tel:{C["phone_tel"]}" data-call>Call {C["phone_display"]}</a></div></div>
<div class="phero-img">{img("bedroom-repaint-finished" if not kingston else "living-room-finished-wide","Freshly painted room from a SoOptimal job",rel,eager=True)}</div></div></section>
<section><div class="wrap"><p class="eyebrow">Services in {city}</p><h2>What we do in {city}</h2><div class="cards three">{cards}</div>
<p class="muted">Areas covered: {e(a["hoods"])}.</p></div></section>
<section class="faqs"><div class="wrap two"><div><p class="eyebrow">Questions</p><h2>{city} FAQ</h2>{faq_html(faq)}
<h3 class="rel-h">Other areas</h3><ul class="pills small">{"".join(f'<li><a href="{rel}{o["slug"]}/">{o["city"]}</a></li>' for o in AREAS if o is not a)}</ul></div>
<div id="quote">{quote_form(rel,"aq")}</div></div></section>'''
    write(f'/{a["slug"]}/', page(f'/{a["slug"]}/', a["title"], a["desc"], body, rel, ld(faq_ld(faq), crumbs_ld([("Home","/"),(city,f'/{a["slug"]}/')]))))

def work_page():
    rel="../"
    figs="".join(f'<figure class="g {t.lower()}">{img(n,c,rel,sizes="(min-width:900px) 33vw, 50vw")}<figcaption><b>{t}</b> {e(c)}</figcaption></figure>' for n,c,t in GALLERY)
    body=f'''<section class="phero slim"><div class="wrap"><p class="crumbs"><a href="{rel}">Home</a> / Our work</p><h1>Our work</h1>
<p class="lead">Every photo here was taken by us on our own jobs. No stock images. They cover drywall installation, wall repairs and repaints from 2019 to 2026.</p></div></section>
<section><div class="wrap"><div class="gallery">{figs}</div></div></section>{cta_band(rel,"Have a wall like one of these?","Text a photo and we will tell you what it takes to fix.")}'''
    write("/our-work/", page("/our-work/","Our Work: Painting & Drywall Repair Photos | SoOptimal Contracting",
      "Before, during and after photos from SoOptimal Contracting painting, drywall repair and apartment turnover jobs.", body, rel, ld(crumbs_ld([("Home","/"),("Our work","/our-work/")]))))

def quote_page():
    rel="../"
    body=f'''<section class="hero">{img("living-room-finished-wide","",rel,cls="hero-bg",eager=True,sizes="100vw")}<div class="wrap hero-grid"><div class="hero-copy"><p class="eyebrow">Free quote · {C["base_city"]}, Cambridge, Guelph</p>
<h1>Painting or wall repair? Get a written price by tomorrow.</h1>
<p class="lead">Tell us what needs doing, add a photo if you have one, and we will reply with a written quote within one business day.</p>
<ul class="ticks">{"".join(f"<li>{e(t)}</li>" for t in trust_items())}</ul>
<div class="tri mini"><figure>{img("kitchen-wall-damage-before","Damaged kitchen wall before repair",rel,sizes="30vw")}<figcaption><b>Before</b></figcaption></figure>
<figure>{img("living-room-repaint-finished","Finished painted living room",rel,sizes="30vw",eager=True)}<figcaption><b>After</b></figcaption></figure></div>
<p class="call-line">Prefer to talk? <a href="tel:{C["phone_tel"]}" data-call>{C["phone_display"]}</a></p></div>
<div class="hero-form" id="quote">{quote_form(rel,"lq","Request your free quote")}</div></div></section>'''
    write("/free-quote/", page("/free-quote/","Free Painting & Drywall Repair Quote | SoOptimal Contracting",
      "Request a free written quote for interior painting, drywall repair or plaster repair in Kitchener, Waterloo, Cambridge or Guelph.", body, rel, landing=True))

def thanks_page():
    rel="../"
    body=f'''<section class="phero slim"><div class="wrap narrow"><h1>Thanks. Your request is in.</h1>
<p class="lead">We reply within one business day with a written price or a time for a site visit.</p>
<p>To speed things up, text photos of the job to <a href="sms:{C["phone_tel"]}">{C["phone_display"]}</a> with your name.</p>
<p><a class="btn btn-primary" href="{rel}">Back to home</a></p></div></section>'''
    conv=""
    if C["gads_id"] and C["gads_form_label"]:
        conv=f"<script>window.addEventListener('load',function(){{if(window.gtag)gtag('event','conversion',{{send_to:'{C['gads_id']}/{C['gads_form_label']}'}})}})</script>"
    write("/thank-you/", page("/thank-you/","Quote request received | SoOptimal Contracting","Your quote request has been received.", body+conv, rel, noindex=True))

def notfound():
    rel="/"
    body=f'''<section class="phero slim"><div class="wrap narrow"><h1>Page not found</h1><p class="lead">That page does not exist. Try the home page or call {C["phone_display"]}.</p><p><a class="btn btn-primary" href="/">Go to home</a></p></div></section>'''
    write("/404.html", page("/404.html","Page not found | SoOptimal Contracting","Page not found.", body, rel, noindex=True))

def meta_files():
    urls=["/"]+[f'/{s["slug"]}/' for s in SERVICES]+[f'/{a["slug"]}/' for a in AREAS]+["/our-work/","/free-quote/"]
    write("/sitemap.xml",'<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'+"".join(f"<url><loc>{C['domain']}{u}</loc><lastmod>{TODAY}</lastmod></url>\n" for u in urls)+"</urlset>\n")
    bots="\n".join(f"User-agent: {b}\nAllow: /\n" for b in ["GPTBot","OAI-SearchBot","ChatGPT-User","ClaudeBot","Claude-SearchBot","PerplexityBot","Google-Extended","Applebot-Extended"])
    write("/robots.txt",f"User-agent: *\nAllow: /\nDisallow: /thank-you/\n\n{bots}\nSitemap: {C['domain']}/sitemap.xml\n")
    L=[f"# {C['name']}","",f"> Painting and drywall contractor based in Kitchener-Waterloo, Ontario, Canada. Interior painting, drywall repair, plaster repair, drywall taping and finishing, and apartment turnover painting for landlords and property managers.","",
       "## Key facts",f"- Phone and text: {C['phone_display']}",f"- Email: {C['email']}","- Service area: Kitchener, Waterloo, Cambridge, Guelph (all services); Kingston, Ontario (multi-unit residential projects)",
       "- Hours: Monday to Friday 7am to 6pm, Saturday 8am to 4pm","- Quotes: free, usually within one business day, often from photos sent by text","- Owner-operated; repair and painting done by the same contractor","- Commercial general liability insurance and WSIB coverage; Working at Heights, aerial lift and WHMIS trained",f"- Drywall experience since {C['since']}","",
       "## Services"]+[f"- [{s['nav']}]({C['domain']}/{s['slug']}/): {s['desc']}" for s in SERVICES]+["","## Service areas"]+[f"- [{a['city']}]({C['domain']}/{a['slug']}/): {a['desc']}" for a in AREAS]+["","## Common questions"]+[f"- **{q}** {a}" for q,a in HOME_FAQ]+["",f"## Contact\n- [Free quote form]({C['domain']}/free-quote/)\n- [Job photos]({C['domain']}/our-work/)"]
    write("/llms.txt","\n".join(L)+"\n")
    write("/favicon.svg",'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="12" fill="#14202B"/><path d="M12 40h40l-6 10H12z" fill="#16965A"/><text x="12" y="34" font-family="Arial,sans-serif" font-weight="800" font-size="26" fill="#fff">So</text></svg>')
    write("/vercel.json", json.dumps({"trailingSlash":True,"headers":[{"source":"/img/(.*)","headers":[{"key":"Cache-Control","value":"public, max-age=31536000, immutable"}]},{"source":"/(.*)","headers":[{"key":"X-Content-Type-Options","value":"nosniff"},{"key":"Referrer-Policy","value":"strict-origin-when-cross-origin"}]}],"redirects":[{"source":"/index.html","destination":"/","permanent":True}]},indent=1))

if __name__=="__main__":
    home(); [service_page(s) for s in SERVICES]; [area_page(a) for a in AREAS]
    work_page(); quote_page(); thanks_page(); notfound(); meta_files()
    print("built", sum(len(f) for _,_,f in os.walk("site")), "files")
