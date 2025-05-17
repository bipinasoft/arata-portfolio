# PDF Text Extractor

This Python script extracts text from PDF files.

## Setup

1. Make sure you have Python installed
2. Install dependencies:
   ```powershell
   pip install -r requirements.txt
   ```

## Usage

Run the script from the project root:
```powershell
python pdf-to-text/read_pdf.py
```

This will:
1. Read the PDF from the `documents` folder
2. Extract the text
3. Save it to `pdf_content.txt` in the project root

## Structure

- `read_pdf.py` - Main script for PDF text extraction
- `requirements.txt` - Python dependencies
