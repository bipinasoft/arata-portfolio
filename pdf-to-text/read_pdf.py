import os
import sys
import PyPDF2

def extract_text_from_pdf(pdf_path, output_path):
    """
    Extract text from a PDF file and save it to a text file
    Args:
        pdf_path (str): Path to the PDF file
        output_path (str): Path where to save the extracted text
    """
    try:
        # Open the PDF file
        with open(pdf_path, 'rb') as file:
            # Create a PDF reader object
            pdf_reader = PyPDF2.PdfReader(file)
            
            # Extract text from each page
            text = ''
            for page in pdf_reader.pages:
                text += page.extract_text()
            
            # Write the extracted text to a file
            with open(output_path, 'w', encoding='utf-8') as output_file:
                output_file.write(text)
            
            print(f"Successfully extracted text from {pdf_path}")
            print(f"Text saved to {output_path}")
            
    except Exception as e:
        print(f"Error processing PDF: {str(e)}")
        sys.exit(1)

if __name__ == "__main__":
    # Set up file paths
    current_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    pdf_path = os.path.join(current_dir, 'documents', 'A.T.Mahapatra_updated_word_format_new__140919.pdf')
    output_path = os.path.join(current_dir, 'pdf_content.txt')
    
    # Extract text from PDF
    extract_text_from_pdf(pdf_path, output_path)
