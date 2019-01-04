from joshpy import *
from PIL import Image

size = 300, 300

for f in files(file_type="png"):	
	im = Image.open(f)
	im.thumbnail(size, Image.ANTIALIAS)
	im.save(f)	