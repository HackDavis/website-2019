from pprint import pprint

def ensure_dir(directory):
	"""
	Ensures a directory exists.
	"""
	import os
	if not os.path.exists(directory):
		os.makedirs(directory)
	return

def delete_folder(folder):
	"""
	Deletes a folder if it exists.
	"""
	import shutil
	shutil.rmtree(folder, ignore_errors=True)
	return

def delete_file(filename):	
	"""
	Deletes a file if it exists. 
	"""
	import os
	try:
		os.remove(filename)
	except OSError:
		pass
	return 

def path(path=""):
	"""
	Will return the specified path joined with os.getcwd().
	"""
	import os
	return os.path.join(os.getcwd(), path)

def destroy_duplicate_cwd(text, ensure_cwd=True):
	result = text
	if path("") in text:
		result = text.replace(path(""), '')		
	if ensure_cwd:
		result = path("") + result
	return result

def files(path="", file_type="", include_path=True, recurse=False):
	"""
	A flexible function to return files from a given directory.
	"""
	import os, fnmatch

	if '.' not in file_type and file_type != "" and file_type != "/":
		file_type = '.' + file_type

	if path.strip() == "":
		path = os.getcwd()

	result = []

	def add(file):
		n_path = path
		if(os.getcwd() != path):
			n_path = os.getcwd() + "/" + path
		
		if include_path == True:		
			file = path + "/" + file	
			file = destroy_duplicate_cwd(file)
			result.append(file)
			#result.append(os.path.join(n_path, file))
		else:
			result.append(file)

	if recurse:
		if file_type == "":
			file_type = "*"
		elif '/' not in file_type:
			file_type = "*" + file_type
		def find_files(directory, pattern):
			for root, dirs, files in os.walk(directory):				
				if file_type == "/":					
					for i in dirs:
						add(i)
					continue					
				for basename in files:
					if fnmatch.fnmatch(basename, pattern):
						#filename = os.path.join(root, basename)
						filename = basename
						yield filename
		for filename in find_files(path, file_type):    
			add(filename)
		return result

	for file in os.listdir(path):		
		if file_type == "/":
			n_path = os.path.join(os.getcwd(), path+"/"+file)			
			if os.path.isdir(n_path):				
				add(file)
				continue
			else:
				continue
		if file_type.strip() != "":
			if file.endswith(file_type):
				add(file)
			else:
				continue			
		else:
			add(file)
	return result

def lines(list):
	"""
	Prints the lines in a list.
	"""
	for i in list:
		print(i)
	return

def copy(src, dst):
	"""
	Copies a file from src to dst.
	"""
	import shutil
	shutil.copy(src, dst)
	return

import re

def atoi(text):
    return int(text) if text.isdigit() else text

def natural_keys(text):
    '''
    alist.sort(key=natural_keys) sorts in human order
    http://nedbatchelder.com/blog/200712/human_sorting.html
    (See Toothy's implementation in the comments)
    '''
    return [ atoi(c) for c in re.split('(\d+)', text) ]

def extract_strings(data, contains):
	result = []   
	for i in data:
		if contains in i:
			result.append(i)
	result.sort()
	return result

def get_digits(text):
	import re
	regex = re.compile(r'\d+')
	return [int(x) for x in regex.findall(text)]