import math
print("hello")
a = int(input("nhap gia tri a: "))
b = int(input("nhap gia tri b: "))
print(a + b)
print(a - b)
print(a * b)
print(a / b)
print(a // b)
print(a % b)
r = int(input("nhap ban kinh: "))
c = 2 * math.pi

w = float(input("Chieu rong: "))
h = float(input("chieu dai: "))
print(f"chu vi {w+h}")
print(f"dien tich {w*h}")

# 1. Kết quả của các biểu thức logic 🤣
# Lưu ý:
# Toán tử and TÌM GIÁ TRỊ SAI ĐẦU TIÊN TRONG BIỂU THỨC VÀ TRẢ VỀ GIÁ TRỊ ĐÓ, 
# NẾU KHÔNG CÓ GIÁ TRỊ NÀO SAI, TRẢ VỀ GIÁ TRỊ CUỐI CÙNG
# Toán tử or TÌM GIÁ TRỊ ĐÚNG ĐẦU TIÊN TRONG BIỂU THỨC VÀ TRẢ VỀ GIÁ TRỊ ĐÓ, 
# NẾU KHÔNG CÓ GIÁ TRỊ NÀO ĐÚNG, TRẢ VỀ GIÁ TRỊ CUỐI CÙNG
# Toán tử not PHỦ ĐỊNH GIÁ TRỊ
# a = True
# b = not a
# c = not a and not not b and 0

# a and b and c #b
# a or b or c#a
# a and not b and not not c#c
# not (a or not b) and c#a
# not not (a and not not b) or not c#c
# a and print("What is that? 🤣")#print
# b or print("What the hell? 😂")#print
a = int(input("nhap a: "))
a % 2 == 0 and print(f"{a} la so chan")
a % 2 == 0 or print(f"{a} la so le")


