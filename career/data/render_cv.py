import fitz
pdf = r"C:\Users\burha\OneDrive\Desktop\1 project\portfolio\career\data\CV_BurhanuddienRobbani_ATS.pdf"
png = r"C:\Users\burha\OneDrive\Desktop\1 project\portfolio\career\data\CV_preview.png"
d = fitz.open(pdf)
p = d[0]
pix = p.get_pixmap(dpi=110)
pix.save(png)
print("PNG:", png, pix.width, "x", pix.height)
