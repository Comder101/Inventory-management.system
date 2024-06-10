from django.shortcuts import render,redirect
from .serializers import *
from .models import *
from rest_framework.generics import UpdateAPIView
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
# from .forms import Prodform


from rest_framework import generics

@api_view(['PATCH'])
def update_product(request, id):
    try:
        product = Product.objects.get(id=id)
    except Product.DoesNotExist:
        return Response({"error": "Product not found"}, status=status.HTTP_404_NOT_FOUND)

    serializer = ProductsSerializer(product, data=request.data, partial=True)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_200_OK)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

def index(request):
    return render(request,'index.html')

class CategUpAPIView(UpdateAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    lookup_field = 'id' 

class FinUpAPIView(UpdateAPIView):
    queryset = FinManager.objects.all()
    serializer_class = FinmanSerializer
    lookup_field = 'id' 

class SubcategUpAPIView(UpdateAPIView):
    queryset = SubCategory.objects.all()
    serializer_class = SubCategorySerializer
    lookup_field = 'id' 

class BrandUpAPIView(UpdateAPIView):
    queryset = Brand.objects.all()
    serializer_class = BrandSerializer
    lookup_field = 'id' 


@api_view(['GET', 'POST'])
def custm_list(request):
    if request.method == 'GET':
        data = Customer.objects.all()

        serializer = CustomerSerializer(data, context={'request': request}, many=True)

        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = CustomerSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['PUT', 'DELETE','POST'])
def custm_detail(request, pk):
    try:
        customer = Customer.objects.get(pk=pk)
    except Customer.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'PUT':
        serializer = CustomerSerializer(customer, data=request.data,context={'request': request})
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_204_NO_CONTENT)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        customer.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


@api_view(['GET', 'POST'])
def invm_list(request):
    if request.method == 'GET':
        data = Invman.objects.all()

        serializer = InvmanSerializer(data, context={'request': request}, many=True)

        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = InvmanSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['PUT', 'DELETE','POST'])
def invm_detail(request, pk):
    try:
        inventorymanager = Invman.objects.get(pk=pk)
    except Invman.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'PUT':
        serializer = InvmanSerializer(inventorymanager, data=request.data,context={'request': request})
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_204_NO_CONTENT)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        inventorymanager.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    
@api_view(['GET', 'POST'])
def vendor_list(request):
    if request.method == 'GET':
        data = Vendor.objects.all()

        serializer = VendorSerializer(data, context={'request': request}, many=True)

        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = VendorSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['PUT', 'DELETE','POST'])
def vendor_detail(request, pk):
    try:
        vendor = Vendor.objects.get(pk=pk)
    except Vendor.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'PUT':
        serializer = VendorSerializer(vendor, data=request.data,context={'request': request})
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_204_NO_CONTENT)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        vendor.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)    
    
@api_view(['GET', 'POST'])
def deliv_list(request):
    if request.method == 'GET':
        data = DelivPart.objects.all()

        serializer = DelivpartSerializer(data, context={'request': request}, many=True)

        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = DelivpartSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['PUT', 'DELETE','POST'])
def deliv_detail(request, pk):
    try:
        deliverypartner = DelivPart.objects.get(pk=pk)
    except DelivPart.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'PUT':
        serializer = DelivpartSerializer(deliverypartner, data=request.data,context={'request': request})
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_204_NO_CONTENT)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        deliverypartner.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)    

@api_view(['GET', 'POST'])
def uom_list(request):
    if request.method == 'GET':
        data = Uom.objects.all()

        serializer = UomSerializer(data, context={'request': request}, many=True)

        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = UomSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['PUT', 'DELETE','POST'])
def uom_detail(request, pk):
    try:
        uom = Uom.objects.get(pk=pk)
    except Uom.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'PUT':
        serializer = UomSerializer(uom, data=request.data,context={'request': request})
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_204_NO_CONTENT)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        uom.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)    
    

@api_view(['GET', 'POST'])
def prod_list(request):
    if request.method == 'GET':
        data = Product.objects.all()

        serializer = ProductsSerializer(data, context={'request': request}, many=True)

        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = ProductsSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    
@api_view(['PUT', 'DELETE','POST','PATCH'])
def prod_detail(request, pk):
    try:
        prod= Product.objects.get(pk=pk)
    except Product.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'PUT':
        serializer = ProductsSerializer(prod, data=request.data,context={'request': request})
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_204_NO_CONTENT)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        prod.delete()
        return Response(status=status.HTTP_204_NO_CONTENT) 
      
    elif request.method == 'PATCH':
        serializer = UpdateSerializer(prod, data=request.data,context={'request': request})

        if serializer.is_valid():
            
            prod.quantity = serializer.validated_data['quantity']
            prod.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors, status=400)
 
    
@api_view(['GET', 'POST'])
def categ_list(request):
    if request.method == 'GET':
        data = Category.objects.all()

        serializer = CategorySerializer(data, context={'request': request}, many=True)

        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = CategorySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['PUT', 'DELETE','POST'])
def categ_detail(request, pk):
    try:
        category= Category.objects.get(pk=pk)
    except Category.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'PUT':
        serializer = Category(category, data=request.data,context={'request': request})
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_204_NO_CONTENT)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        category.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)    

@api_view(['GET', 'POST'])
def subcateg_list(request):
    if request.method == 'GET':
        data = SubCategory.objects.all()

        serializer = SubCategorySerializer(data, context={'request': request}, many=True)

        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = SubCategorySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['PUT', 'DELETE','POST'])
def subcateg_detail(request, pk):
    try:
        subcateg= SubCategory.objects.get(pk=pk)
    except SubCategory.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'PUT':
        serializer = SubCategory(subcateg, data=request.data,context={'request': request})
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_204_NO_CONTENT)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        subcateg.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)    
    
@api_view(['GET', 'POST'])
def brand_list(request):
    if request.method == 'GET':
        data = Brand.objects.all()

        serializer = BrandSerializer(data, context={'request': request}, many=True)

        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = BrandSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['PUT', 'DELETE','POST'])
def brand_detail(request, pk):
    try:
        brand= Brand.objects.get(pk=pk)
    except Brand.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'PUT':
        serializer = Brand(brand, data=request.data,context={'request': request})
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_204_NO_CONTENT)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        brand.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)    

@api_view(['GET', 'POST'])
def finman_list(request):
    if request.method == 'GET':
        data = FinManager.objects.all()

        serializer = FinmanSerializer(data, context={'request': request}, many=True)

        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = FinmanSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['PUT', 'DELETE','POST'])
def finman_detail(request, pk):
    try:
        finman= FinManager.objects.get(pk=pk)
    except FinManager.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'PUT':
        serializer = FinManager(finman, data=request.data,context={'request': request})
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_204_NO_CONTENT)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        finman.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)    



@api_view(['GET', 'POST'])
def adminl_list(request):
    if request.method == 'GET':
        data = adminl.objects.all()

        serializer = AdminlSerializer(data, context={'request': request}, many=True)

        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = AdminlSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
 

# class UploadView(generics.CreateAPIView):
#     queryset = Video.objects.all()
#     serializer_class = VideoSerializer

import os,subprocess
from django.conf import settings
import shutil
from django.core.mail import send_mail
import time
from datetime import datetime

@api_view(['GET', 'POST'])
def video_list(request):
    if request.method == 'GET':
        data = Video.objects.all()
        serializer = VideoSerializer(data, context={'request': request}, many=True)
        return Response(serializer.data)
    
    elif request.method == 'POST':
        serializer = VideoSerializer(data=request.data)
        detection_date_time = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
        if serializer.is_valid():
            video_instance = serializer.save()
            video_path = os.path.join(settings.MEDIA_ROOT, video_instance.video.name)
            video_name = os.path.splitext(os.path.basename(video_path))[0]  
            yolo_dir = os.path.abspath('yolov9')
            command = f'python detect.py --weights best.pt --conf 0.5 --source {video_path} --device cpu'
            subprocess.run(command, shell=True, cwd=yolo_dir)
            
            processed_video_source_path = os.path.join(yolo_dir, 'runs', 'detect', 'exp', f'{video_name}.mp4')
            target_directory = os.path.join(settings.MEDIA_ROOT, 'void_detect')
            os.makedirs(target_directory, exist_ok=True)
            processed_video_target_path = os.path.join(target_directory, f'{video_name}.mp4')
            shutil.move(processed_video_source_path, processed_video_target_path)
            
   
            detection_date_time = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
            subject = 'Urgent: Shelf Replenishment Required'
            message = f"""Subject: {subject}

Dear Sir/Madam,

Our automated shelf monitoring system has detected an empty space on your retail shelves. Timely replenishment of stock is crucial for maintaining optimal sales and ensuring customer satisfaction. Video processing for {video_name} is complete.

Details of the Void Detection:
- Video File: {video_name}
- Detected At: {detection_date_time}

Please take immediate action to restock the empty space to ensure continuous product availability.

Best regards,
Administrator
"""
            
            recipient_list = ['teambitsandbytesx@gmail.com']

            email = EmailMessage(
                subject,
                message,
                settings.EMAIL_HOST_USER,
                recipient_list,
            )
            
 
            email.attach_file(processed_video_target_path)
            email.send()


            
            return Response({'videoPath':processed_video_target_path}, status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# /////
    
# import smtplib
# from email.mime.multipart import MIMEMultipart
# from email.mime.text import MIMEText 
# from django.http import HttpResponse

# # def send_email():
# #     from_email = "pratikmorecp.com"
# #     password = "yjpzgnuggocfvfqk"
# #     to_email = "teambitsandbytesx@gmail.com"
# #     subject = "Immediate Action Required"
# #     body = "Body detected"

# #     msg = MIMEMultipart()
# #     msg['From'] = from_email
# #     msg['To'] = to_email
# #     msg['Subject'] = subject
# #     msg.attach(MIMEText(body, 'plain'))
    
# #     try:
# #         server = smtplib.SMTP('smtp.gmail.com', 587)
# #         server.starttls()
# #         server.login(from_email, password)
# #         server.sendmail(from_email, to_email, msg.as_string())
# #         print("Email sent successfully.")
# #     except Exception as e:
# #         print(f"Error: {e}")
# #     finally:
# #         server.quit()

# # def send_email_view(request):
# #     send_email()
# #     return HttpResponse("Email sent successfully.")

# # class VideoDetailsView(generics.RetrieveAPIView):
# #     queryset = Video.objects.all()
# #     serializer_class = VideoSerializer

    
# # ,{'products':products})

# # def invm(request):
# #     return render(request,'inventm.html')

# # def add_prod(request):
# #     form =Prodform
# #     context={'form'}

# #     if request.method=='POST':
# #         form=Prodform(request.POST)
# #         if form.is_valid:
# #             form.save()
# #             return redirect("/")
        

        

# #     return render(request,'html file',context)
    

# # Create your views here.
from django.core.mail import EmailMessage


