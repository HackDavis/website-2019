from joshpy import *
from PIL import Image

for f in files(file_type="png"):	
	baseheight = 200
	img = Image.open(f)
	hpercent = (baseheight / float(img.size[1]))
	wsize = int((float(img.size[0]) * float(hpercent)))
	img = img.resize((wsize, baseheight), Image.ANTIALIAS)
	img.save(f)