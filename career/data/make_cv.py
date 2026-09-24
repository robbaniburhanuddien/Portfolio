import sys, types
_pil = types.ModuleType("PIL")
_pil.Image = types.ModuleType("PIL.Image")
_pil.Image.Image = object
sys.modules["PIL"] = _pil
sys.modules["PIL.Image"] = _pil.Image
from reportlab.lib.pagesizes import A4
from reportlab.lib.units import mm
from reportlab.lib.colors import HexColor
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, HRFlowable
from reportlab.lib.enums import TA_LEFT

out = r"C:\Users\burha\OneDrive\Desktop\1 project\portfolio\career\data\CV_BurhanuddienRobbani_ATS.pdf"
doc = SimpleDocTemplate(out, pagesize=A4, leftMargin=15*mm, rightMargin=15*mm,
                        topMargin=15*mm, bottomMargin=15*mm,
                        title="CV - Burhanuddien Robbani", author="Burhanuddien Robbani")
ss = getSampleStyleSheet()
GREEN = HexColor("#26794A")
def st(name, **kw):
    base = kw.pop("parent", ss["Normal"])
    return ParagraphStyle(name, parent=base, **kw)

name_s  = st("name", parent=ss["Title"], fontSize=16, textColor=GREEN, spaceAfter=2, alignment=TA_LEFT)
head_s  = st("head", fontSize=9.5, textColor=HexColor("#333333"), spaceAfter=2)
contact = st("contact", fontSize=8.5, textColor=HexColor("#555555"), spaceAfter=4)
sec_s   = st("sec", fontSize=11, textColor=GREEN, spaceBefore=8, spaceAfter=3, leading=13)
h3_s    = st("h3", fontSize=9.5, textColor=HexColor("#111111"), spaceBefore=4, spaceAfter=1, leading=12)
meta_s  = st("meta", fontSize=8.5, textColor=HexColor("#666666"), spaceAfter=1)
bullet  = st("bul", fontSize=9, leading=12, leftIndent=10, bulletIndent=2, spaceAfter=1)

story = []
story += [Paragraph("BURHANUDDIEN ROBBANI, S.P.", name_s),
          Paragraph("Technical Mangrove Rehabilitation Facilitator | GIS &amp; UAV Operator | M4CR (World Bank x KLHK)", head_s),
          Paragraph("Email: burhanuddienrobbani@gmail.com &nbsp;|&nbsp; LinkedIn: linkedin.com/in/robbanib &nbsp;|&nbsp; Lokasi: Medan, Sumatera Utara, Indonesia", contact),
          HRFlowable(width="100%", thickness=1, color=GREEN, spaceAfter=6)]
def sec(t): story.append(Paragraph(t, sec_s))
def b(t): story.append(Paragraph("&bull; "+t, bullet))

sec("EXPERIENCE")
story += [Paragraph("Technical Mangrove Rehabilitation Facilitator - PPIU M4CR Sumatera Utara (World Bank x KLHK)", h3_s),
          Paragraph("Jan 2025 - Present &nbsp;|&nbsp; 1y 7m &nbsp;|&nbsp; Medan, North Sumatra", meta_s)]
for x in ["Monitoring &amp; evaluation (M&amp;E) rehabilitasi mangrove di area target",
          "Survei hidrologi untuk menentukan perlu/tidaknya intervensi",
          "Administrasi swakelola bersama Kelompok Masyarakat (Pokmas)",
          "Koordinasi dengan Pemda, masyarakat lokal &amp; pemangku kawasan"]: b(x)
story += [Paragraph("Mangrove Rehabilitation Staff (Technical &amp; GIS) - BRGM", h3_s),
          Paragraph("Jul 2023 - Dec 2024 &nbsp;|&nbsp; 1y 6m &nbsp;|&nbsp; Jakarta", meta_s)]
for x in ["Rehabilitasi mangrove ~1.786 Ha di Kepri (703+197 Ha 2023; 69+584+229 Ha 2024) + Bangka Belitung",
          "GIS Analyst: ArcGIS, QGIS, GEE - pengumpulan &amp; presentasi data spasial",
          "Pemberdayaan masyarakat &amp; stakeholder coordination"]: b(x)
story += [Paragraph("Research Analyst Intern - BBKP Tanjung Priok (Kementan)", h3_s),
          Paragraph("Jan 2021 - Mar 2021 &nbsp;|&nbsp; 3m &nbsp;|&nbsp; Jakarta", meta_s)]
for x in ["Deteksi biomolekuler (PCR) bakteri OPTK pada benih kentang Skotlandia",
          "Karantina komoditas impor-ekspor (kentang, anggrek)",
          "Inspeksi instalasi karantina di pelabuhan &amp; gudang"]: b(x)

sec("EDUCATION")
story.append(Paragraph("Universitas Jenderal Soedirman - S.P. Agroteknologi / Plant Protection (2018-2023)", h3_s))
sec("SKILLS")
b("GIS: ArcGIS Pro, QGIS, Google Earth Engine, ArcGIS Field Maps, GNSS/GPS, KoboToolbox/ODK")
b("Domain: Mangrove Rehabilitation, Hydrological Survey, UAV/Drone Piloting, Plant Protection, Stakeholder Coordination")
b("Languages: Indonesian (Native), English (Limited Working)")
b("Coding: JavaScript (web), Python (basic)")
doc.build(story)
print("PDF created:", out)
import os; print("SIZE:", os.path.getsize(out))
