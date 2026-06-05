// ========================================================================
// === DỮ LIỆU LỊCH TRÌNH CHUYẾN ĐI MỚI (FORESTIVAL 2026) ===
// File: ninh-binh-202605.js
// ========================================================================

const scheduleData = {
    "tripInfo": {
        "title": "Hành Trình Forestival 2026",
        "subtitle": "Hiếu & Chi | Ninh Bình. Kỳ nghỉ dưỡng & Nhạc hội",
        "dates": "29-31/05/2026",
        "defaultRegion": "Ninh Bình",
        "totalBudget": undefined,
        "documentUrl": "https://docs.google.com/spreadsheets/d/1NLXXASSWTs54VkjUtJAY2vKIL7dYKiuCHjIUJQkbpvU"
    },
    "security": {
        "secretCode": "MTQwNQ==",  // Base64 encoded password. Để encode: btoa("your-password"). Ví dụ: btoa("1234") = "MTIzNA=="
        "hint": 'Em iu chào đời ngày nào vậy ta? 🎂'  // Gợi ý mật khẩu (optional)
    },
    "schedule": [
        // ==================== NGÀY 1 ====================
        {
            "dayInfo": {
                "day": 1,
                "date": "2026-05-29",
                "title": "Ngày 1: Đến sớm - Tự do & Phố đêm",
                "description": "Đẩy giờ đi sớm, linh hoạt chiều tà, và tận hưởng trọn vẹn phố đêm.",
                "mapUrl": "https://maps.app.goo.gl/y3eAvfZYqpVPw1VA6"
            },
            "timelineItems": [
                {
                    "timeInfo": {
                        "startTime": "2026-05-28T17:45:00",
                        "endTime": "2026-05-29T08:45:00"
                    },
                    "title": "Chuẩn bị trước chuyến đi. Ngủ đủ giấc",
                    "summary": "Tối hôm trước chuẩn bị xếp đồ chung & ngủ sớm. Sáng dậy sớm ăn nhẹ & kiểm tra đồ.",
                    "iconType": "time",
                    "details": {
                        "directions": {
                            "mapUrl": "https://maps.app.goo.gl/Jf7rir8LokrZMicf7",
                            "steps": [
                                "Hành Lý:<br>" +
                                "+ 1 Vali của Hiếu (2 pack đồ riêng của 2 người)<br>" +
                                "+ (Tùy chọn 1 túi trống) <br>" +
                                "+ Túi đeo chéo của Hiếu <br>" +
                                "+ Túi xách của Chi <br>" +
                                "+ Túi giày",
                                "🛵 17h45: Tan làm. Ăn tối (ăn riêng). Về phòng, vệ sinh cá nhân",
                                "🧳 19h30: Xếp đồ cá nhân riêng trước, sau đó đưa vào pack đồ chung",
                                "🛵 21h30: Di chuyển đến phòng nghỉ. Cân đối thời tiết mưa",
                                "🥋 22h00: Kiểm tra đồ. Các hoạt động cùng nhau",
                                "😴 23h00: Ngủ đủ 8 tiếng",
                            ]
                        },
                        "places": [
                            {
                                "name": "Tien Dat Hotel",
                                "description": "(4,2 ⭐️ - 37 đánh giá). Vị trí cách điểm đón xe Limousine 300M, có thể đi bộ",
                                "mapUrl": "https://maps.app.goo.gl/acnMthjzdf7ZPmhaA"
                            },
                            {
                                "name": "Limousine Tràng An",
                                "description": "23 Tú Mỡ, Yên Hòa. Điểm đón xe Limousine (Gần BigC Thăng Long, cổng sau). Có mặt 08:35 - 08:40",
                                "mapUrl": "https://maps.app.goo.gl/YMs7bj4noTSyXgKU9"
                            },
                            {
                                "name": "48 Tố Hữu",
                                "description": "Dự kiến ban đầu tập trung và di chuyển từ đây đến điểm đón xe Limousine (bao gồm xếp đồ chung vali tại đây)",
                                "mapUrl": "https://maps.app.goo.gl/23y16XQJeVDWL1Zd8"
                            }
                        ],
                        "reason": "Gặp nhau sớm. Bấm gọi Taxi lúc 08:15 giúp triệt tiêu hoàn toàn rủi ro kẹt xe sáng Thứ 6. Tới nơi lúc 08:40 thong thả ăn bánh mỳ, chủ động 100% không để nhà xe hối thúc."
                    }
                },
                {
                    "timeInfo": {
                        "startTime": "2026-05-29T08:45:00",
                        "endTime": "2026-05-29T11:00:00"
                    },
                    "title": "Khởi hành hãng Tràng An Limousine",
                    "summary": "Check-in nhà xe lúc 08:40. Lên xe lúc 08:45, gửi Vali cốp xe, ngả ghế massage ngủ êm ái.",
                    "iconType": "time",
                    "details": {
                        "places": [
                            {
                                "name": "Limousine Tràng An. Điểm đón tại Hà Nội",
                                "description": "23 Tú Mỡ, Yên Hòa. Lên xe Limousine ghế massage thoải mái để giữ sức. (Gần BigC Thăng Long, cổng sau)",
                                "mapUrl": "https://maps.app.goo.gl/YMs7bj4noTSyXgKU9"
                            },
                            {
                                "name": "Điểm đến tại Ninh Bình (Trung tâm thành phố)",
                                "description": "Ăn trưa khi đến nơi.",
                                "mapUrl": "https://maps.app.goo.gl/jmxHn5mrbFpmeknq9"
                            }
                        ],
                        "directions": {
                            "mapUrl": "https://maps.app.goo.gl/MAK83T4UyoyghrTdA",
                            "steps": [
                                "Hành lý mang gọn nhẹ để tiện di chuyển buổi trưa (Không xách nước mỏi tay từ HN).",
                                "Dự kiến khởi hành lúc 09:00. Thời gian di chuyển trung bình 1.5h đến 2h. Đã cộng thêm 30 phút buffer an toàn đề phòng kẹt xe."
                            ]
                        },
                        "budgets": [
                            {
                                "name": "Taxi đi đến điểm đón Limousine",
                                "amount": 80000,
                                "category": "transport",
                                "note": "Nếu xe Limousine đón cố định",
                                "isOptional": false
                            },
                            {
                                "name": "Vé xe Limousine chiều đi",
                                "amount": 400000,
                                "category": "transport",
                                "note": "200k mỗi người x 2 người. Giống chiều về",
                                "paidBy": "ChiBV",
                                "isOptional": false
                            }
                        ],
                        "reason": "Chiến thuật: Đi lúc 09:00 giúp né giờ cao điểm ăn trưa tại Ninh Bình."
                    }
                },
                {
                    "timeInfo": {
                        "startTime": "2026-05-29T11:00:00",
                        "endTime": "2026-05-29T11:40:00"
                    },
                    "title": "Ăn trưa trung tâm thành phố: Đặc sản Bún Chả Quạt",
                    "summary": "Nhờ Limousine trả thẳng cửa quán để tiết kiệm thời gian di chuyển.",
                    "iconType": "food",
                    "details": {
                        "places": [
                            {
                                "name": "Bún chả quạt Tuấn Anh (Ưu tiên 1)",
                                "description": "168a Đ. Nam Thành. Đặc sản địa phương nổi tiếng, hương vị đậm đà.",
                                "mapUrl": ""
                            },
                            {
                                "name": "Bún Chả Ngõ 5 cs3 (Ưu tiên 2)",
                                "description": "202 Lê Thái Tổ. Phương án dự phòng nếu quán 1 quá đông.",
                                "mapUrl": ""
                            },
                            {
                                "name": "Bún Chả Quạt Cố Đô (Ưu tiên 3)",
                                "description": "Lựa chọn dự phòng số 3.",
                                "mapUrl": ""
                            }
                        ],
                        "directions": {
                            "steps": [
                                "Kéo vali vào quán, dặn Limousine trả thẳng tại cửa.",
                                "Gọi món và ăn nhanh gọn."
                            ]
                        },
                        "budgets": [
                            {
                                "name": "Ăn trưa Bún Chả",
                                "amount": 100000,
                                "category": "food",
                                "note": "50k mỗi người x 2 người",
                                "isOptional": false
                            }
                        ],
                        "reason": "Lưu ý: Quán bình dân, không máy lạnh xịn. Khung giờ 11h quán vắng khách nên vali để góc cực kỳ thoải mái. Kịch bản đến sớm: Nếu đường thoáng, xe đến lúc 10:30, hai bạn sẽ ăn bún chả luôn lúc quán cực vắng như VIP, sau đó qua WinMart nghỉ ngơi lâu hơn. Cần ăn nhanh gọn để nhường chỗ và tránh nóng."
                    }
                },
                {
                    "timeInfo": {
                        "startTime": "2026-05-29T11:40:00",
                        "endTime": "2026-05-29T12:30:00"
                    },
                    "title": "Trú nóng ở siêu thị & Mua sắm hậu cần show nhạc",
                    "summary": "Bắt Taxi quãng đường ngắn sang Siêu thị WinMart. VÀO QUẦY GỬI VALI MIỄN PHÍ. Đi tay không hưởng điều hòa 45 phút. Chuẩn bị đủ đồ bữa tối show nhạc ngày mai.",
                    "iconType": "explore",
                    "details": {
                        "places": [
                            {
                                "name": "Siêu thị WinMart",
                                "description": "Số 848 Trần Hưng Đạo. Đây là đại siêu thị lớn, có máy lạnh cực mát và quầy giữ đồ.",
                                "mapUrl": "https://maps.app.goo.gl/VoSg4zk1hVG8ZEND9"
                            }
                        ],
                        "directions": {
                            "steps": [
                                "Bắt Taxi quãng đường ngắn (~1.5km) từ quán Bún chả sang Siêu thị.",
                                "Gửi vali tại quầy miễn phí để đi tay không cho nhẹ nhàng.",
                                "Mua mì ly dự trữ ăn đêm ngày mai.",
                                "<b>MUA ĐỒ ĐỐI PHÓ AN NINH:</b> Bắt buộc mua 1 chai nước nhỏ lùn 350ml (như TH True Milk, Aquafina) và đồ ép nén (2 gói lương khô, vài cái xúc xích Ponnie). KHÔNG mua chai lớn hay túi snack phồng to vì sẽ không nhét vừa túi đeo chéo."
                            ]
                        },
                        "budgets": [
                            {
                                "name": "Đồ siêu thị (Nước nhỏ, Nước điện giải, Lương khô, Mì ly, Xúc xích...)",
                                "amount": 150000,
                                "category": "shopping",
                                "note": "Hậu cần nhạc hội. Chuẩn bị cho bữa tối trước show nhạc. Nước uống homestay, Bữa đêm sau show nhạc",
                                "isOptional": false
                            },
                            {
                                "name": "Taxi từ quán ăn ra Siêu thị",
                                "amount": 80000,
                                "category": "transport",
                                "note": "Quãng đường ngắn ~1.5km",
                                "isOptional": false
                            }
                        ],
                        "reason": "Chiến thuật hoàn hảo: Giải quyết được 'thời gian chết' chờ check-in homestay (14:00 mới được nhận phòng), tránh được cái nắng gắt giữa trưa, không tốn tiền đi cafe vô ích và mua đủ đồ hậu cần giá rẻ cho đêm nhạc.<br>BTC CẤM 100% đồ ăn thức uống mang vào sự kiện. Chiến thuật sinh tồn là chia nhỏ đồ đạc, nhét chai nước lùn và đồ ăn nén vào túi đeo chéo (hoặc giấu cốp xe máy), tuyệt đối không cầm lộ liễu trên tay."
                    }
                },
                {
                    "timeInfo": {
                        "startTime": "2026-05-29T12:30:00",
                        "endTime": "2026-05-29T12:50:00"
                    },
                    "title": "Di chuyển Taxi về Tràng An Homestay",
                    "summary": "Lấy lại Vali, xách túi đồ siêu thị. Gọi Taxi từ cửa WinMart chở thẳng về Homestay.",
                    "iconType": "logistics",
                    "details": {
                        "places": [
                            {
                                "name": "WinMart (848 Trần Hưng Đạo)"
                            },
                            {
                                "name": "Trang An Peaceful Homestay"
                            }
                        ],
                        "directions": {
                            "steps": [
                                "Nhận lại vali ở quầy gửi đồ siêu thị.",
                                "Xách thêm túi nilon đồ vừa mua, gọi Taxi truyền thống hoặc Xanh SM.",
                                "Tuyển đường WinMart -> Tràng An. Khoảng cách từ trung tâm thành phố vào khu vực Tràng An (~11km)"
                            ]
                        },
                        "budgets": [
                            {
                                "name": "Taxi từ Siêu thị về Homestay",
                                "amount": 160000,
                                "category": "transport",
                                "note": "Di chuyển xa khoảng 10Km. Tính theo cước app",
                                "isOptional": false
                            }
                        ],
                        "reason": "Trời đang nắng nóng và có nhiều đồ đạc lỉnh kỉnh (Vali + Túi nước siêu thị). Việc gọi Taxi đi thẳng vào homestay đảm bảo an toàn tuyệt đối, có máy lạnh và cước phí minh bạch."
                    }
                },
                {
                    "timeInfo": {
                        "startTime": "2026-05-29T12:50:00",
                        "endTime": "2026-05-29T14:30:00"
                    },
                    "title": "Check-in Homestay, Tắm tráng & Ngủ trưa",
                    "summary": "Nhận phòng, cất đồ và nhận xe tay ga. TẮM TRÁNG LUÔN bằng nước mát xả sạch mồ hôi. Ngủ sâu giấc.",
                    "iconType": "hotel",
                    "details": {
                        "places": [
                            {
                                "name": "Trang An Peaceful Homestay",
                                "description": "Homestay phong cách resort nghỉ dưỡng cực chill, không gian nhiều cây xanh, có hồ bơi.",
                                "mapUrl": ""
                            }
                        ],
                        "directions": {
                            "steps": [
                                "Làm thủ tục nhận phòng, cất gọn hành lý.",
                                "Nhận chìa khóa xe tay ga tại lễ tân để dùng cho các ngày tới.",
                                "Tắm tráng bằng nước mát để xả sạch bụi đường.",
                                "Ngủ sâu giấc khoảng 1 tiếng để phục hồi năng lượng."
                            ]
                        },
                        "budgets": [
                            {
                                "name": "Chi phí thuê Homestay (2 đêm)",
                                "amount": 1200000,
                                "category": "hotel",
                                "note": "600k mỗi đêm x 2 đêm. Checkin 13h ngày 29/5 Check out 11h ngày 31/5. Đã gồm ăn sáng. Cọc 300k. khi checkin thanh toán nốt 900k tiền mặt",
                                "paidBy": "HieuND",
                                "isOptional": false
                            },
                            {
                                "name": "Thuê xe máy (2 ngày)",
                                "amount": 240000,
                                "category": "transport",
                                "note": "Giá thuê xe máy là 120k/1 ngày không xăng. Trả xe 12h tính 1/2 ngày Còn qua 12h là cả ngày",
                                "isOptional": false
                            }
                        ],
                        "reason": "Tắm ngay trước khi ngủ giúp hạ nhiệt độ cơ thể, mang lại cảm giác sảng khoái, giấc ngủ sẽ sâu hơn rất nhiều. Chiều dậy makeup không bị bết dính và cập rập."
                    }
                },
                {
                    "timeInfo": {
                        "startTime": "2026-05-29T14:30:00",
                        "endTime": "2026-05-29T17:00:00"
                    },
                    "title": "[3 LỰA CHỌN] Chiều Thứ 6 Tự Do",
                    "summary": "Tùy cảm hứng lúc thức dậy, hai đứa linh hoạt chọn 1 trong 3 phương án.",
                    "iconType": "relax",
                    "details": {
                        "places": [
                            {
                                "name": "Khu vực Tràng An / Homestay",
                                "description": "Khu vực thiên nhiên rộng lớn, có cảnh hoàng hôn tuyệt đẹp rớt xuống cánh đồng lúa và núi đá vôi.",
                                "mapUrl": ""
                            }
                        ],
                        "directions": {
                            "steps": [
                                "🌊 KẾ HOẠCH A: Bơi lội riêng tư (Đề xuất). 14h30: Hồ bơi homestay đang vắng khách cuối tuần, xuống bơi bao trọn hồ. 15h30: Lên phòng tắm tráng lại. 16h15: Dành 45p Makeup Lên đồ chuẩn bị ra phố.",
                                "☕ KẾ HOẠCH B: Đi Cafe 'Giờ Vàng'. 14h30: Dành ngay 45p Makeup lộng lẫy. 15h15: Lấy xe máy chạy ra quán Cafe quanh Tràng An (như Tràng An 1990 hoặc Thung Sen) săn ảnh Hoàng hôn (Tốn thêm khoảng 100k-150k đồ uống).",
                                "🏡 KẾ HOẠCH C: Chill tại Homestay. 14h30: Dành 45p Makeup. 15h15: Đi dạo, tự pha trà/cafe có sẵn tại phòng, chụp ảnh nhàn hạ ngay tại khuôn viên vườn của homestay (Không tốn tiền)."
                            ]
                        },
                        "budgets": [
                            {
                                "name": "Cafe chiều Thứ 6",
                                "amount": 120000,
                                "category": "drink",
                                "note": "Chỉ phát sinh nếu chọn Kế hoạch này",
                                "isOptional": true
                            }
                        ],
                        "reason": "Tôn trọng cảm xúc thực tế. Đặc thù Homestay chiều Thứ 6 thường rất vắng khách (do khách du lịch chưa kịp về nghỉ cuối tuần). Nếu chọn bơi lội lúc này, hai bạn sẽ được bao trọn hồ, riêng tư tuyệt đối thay vì phải chen chúc vào sáng Chủ Nhật."
                    }
                },
                {
                    "timeInfo": {
                        "startTime": "2026-05-29T17:00:00",
                        "endTime": "2026-05-29T17:20:00"
                    },
                    "title": "Di chuyển lên Trung tâm TP. Đổ xăng",
                    "summary": "Dù chọn phương án nào, đến 17h00 hai bạn dắt xe chạy hóng gió vào khu vực phường Tân Thành (Trung tâm TP) để ăn tối.",
                    "iconType": "time",
                    "details": {
                        "directions": {
                            "steps": [
                                "Kiểm tra xăng xe trước khi đi.",
                                "Tận hưởng không khí mát mẻ lúc chiều tà trên đường từ Tràng An ra thành phố."
                            ]
                        },
                        "budgets": [
                            {
                                "name": "Đổ xăng cho xe máy vừa thuê",
                                "amount": 80000,
                                "category": "transport",
                                "note": "",
                                "isOptional": false
                            }
                        ],
                        "reason": "Quãng đường khoảng 5-7km. Đi lúc 17h là thời điểm nắng đã tắt, đường phố lên đèn bắt đầu nhộn nhịp, thời tiết đẹp nhất trong ngày."
                    }
                },
                {
                    "timeInfo": {
                        "startTime": "2026-05-29T17:20:00",
                        "endTime": "2026-05-29T18:15:00"
                    },
                    "title": "Ăn tối trung tâm thành phố (Dễ tiêu hóa)",
                    "summary": "Đẩy giờ ăn sớm để khớp lịch ngắm hoàng hôn, bụng nhẹ dễ tiêu.",
                    "iconType": "food",
                    "details": {
                        "places": [
                            {
                                "name": "Rơm Vàng (Ưu tiên 1)",
                                "description": "112 Lương Văn Tụy - Không gian sang trọng, sạch sẽ.",
                                "mapUrl": "https://maps.app.goo.gl/2AX1jGYwshFwJWmJA"
                            },
                            {
                                "name": "Cơm Niêu Việt Xưa (Ưu tiên 2)",
                                "description": "80 Tràng An - Nhà hàng có phòng lạnh, cơm ngon êm bụng.",
                                "mapUrl": "https://maps.app.goo.gl/sn5vBEBQYzmyKsRaA"
                            },
                            {
                                "name": "Heo Say Xỉn (Ưu tiên 3)",
                                "description": "2 Tràng An - Đồ nướng (Lưu ý: Có rủi ro bị ám mùi khói lên tóc/quần áo).",
                                "mapUrl": "https://maps.app.goo.gl/5ZwhVhsxwUxfW34b7"
                            }
                        ],
                        "directions": {
                            "mapUrl": "https://maps.app.goo.gl/UJfmuzrwDQzxZHbU6",
                            "steps": [
                                "Tới quán chọn bàn có điều hòa mát mẻ.",
                                "Nên gọi các món cơm, rau xào, thịt rang dễ tiêu hóa."
                            ]
                        },
                        "budgets": [
                            {
                                "name": "Bữa tối ngày 1",
                                "amount": 300000,
                                "category": "food",
                                "note": "Cần cập nhật hóa đơn dự kiến",
                                "isOptional": false
                            }
                        ],
                        "reason": "Vì chiều nay đã đổi lịch nhường chỗ cho hoàng hôn/bơi lội, việc ăn tối sớm lúc 17h20 giúp dạ dày có thời gian tiêu hóa, khi đi gội đầu và dạo phố đêm sẽ cảm thấy bụng rất nhẹ nhõm."
                    }
                },
                {
                    "timeInfo": {
                        "startTime": "2026-05-29T18:15:00",
                        "endTime": "2026-05-29T19:00:00"
                    },
                    "title": "Gội đầu & Thư giãn",
                    "summary": "Ghé Nghĩa Hair Salon hoặc tiệm lân cận. Ưu tiên 100% cho bạn gái gội + sấy tạo kiểu bồng bềnh.",
                    "iconType": "relax",
                    "details": {
                        "places": [
                            {
                                "name": "Ly Khánh - Gội đầu. Massage. Trang điểm",
                                "description": "50k-70k, gội 1-1, gội lúc nào cũng được",
                                "mapUrl": "https://maps.app.goo.gl/ku4xKkdhAwvZFvdL7"
                            },
                            {
                                "name": "Nails - Eyelash - Gội Đầu Massage - Dung Beauty",
                                "description": "50k-70k, gội 1-1, 9h đóng cửa",
                                "mapUrl": "https://maps.app.goo.gl/L7sfiP9eRisiKHMv6"
                            },
                            {
                                "name": "Diệu Linh Beauty",
                                "description": "50-60k, gội 1-1, 10h đóng cửa",
                                "mapUrl": "https://maps.app.goo.gl/MY6QZEA5fcSfU852A"
                            },
                            {
                                "name": "Trần Hưng Đạo",
                                "description": "Dọc đường Trần Hưng Đạo có nhiều quán"
                            }
                        ],
                        "directions": {
                            "mapUrl": "https://maps.app.goo.gl/NjrAgAAw26t6KFgx7",
                            "steps": [
                                "Vào tiệm yêu cầu dịch vụ gội đầu thư giãn và sấy tạo kiểu cho bạn gái.",
                                "⚠️ LƯU Ý QUAN TRỌNG: Dặn thợ KHÔNG ấn huyệt vùng bụng vì vừa ăn tối no xong."
                            ]
                        },
                        "budgets": [
                            {
                                "name": "Gội đầu thư giãn",
                                "amount": 100000,
                                "category": "relax",
                                "note": "Ưu tiên dành cho bạn gái",
                                "isOptional": false
                            }
                        ],
                        "reason": "Sau một ngày di chuyển mệt mỏi, việc gội đầu giúp bạn gái xả stress, đồng thời có ngay một mái tóc bồng bềnh, thơm tho hoàn hảo để chụp ảnh dạo phố đêm ngay sau đó."
                    }
                },
                {
                    "timeInfo": {
                        "startTime": "2026-05-29T19:15:00",
                        "endTime": "2026-05-29T21:45:00"
                    },
                    "title": "Dạo Phố đêm Hoa Lư",
                    "summary": "Tóc thơm, bụng nhẹ. Thong thả dạo Phố cổ Hoa Lư, ngắm Tháp Tứ Ân.",
                    "iconType": "nightlife",
                    "details": {
                        "places": [
                            {
                                "name": "Phố cổ Hoa Lư & Tháp Tứ Ân",
                                "description": "Khu phố đi bộ lung linh lồng đèn, mang đậm nét kiến trúc cổ kính.",
                                "mapUrl": ""
                            },
                            {
                                "name": "Hồ Kỳ Lân",
                                "description": "Đi dạo ven hồ mát mẻ, có thể đi thuyền.",
                                "mapUrl": ""
                            }
                        ],
                        "directions": {
                            "steps": [
                                "Gửi xe máy tại bãi gửi xe của Phố cổ.",
                                "Thong thả dạo bộ ngắm cảnh, chụp ảnh check-in dưới ánh đèn lồng.",
                                "Mua các món quà vặt đường phố (như kem, chè, xúc xích).",
                                "Thuê thuyền đi dạo trên hồ Kỳ Lân (nếu thích sự lãng mạn)."
                            ]
                        },
                        "budgets": [
                            {
                                "name": "Gửi xe máy",
                                "amount": 20000,
                                "category": "transport",
                                "note": "Gửi xe gần hồ và phố đi bộ",
                                "isOptional": false
                            },
                            {
                                "name": "Ăn vặt phố đi bộ",
                                "amount": 150000,
                                "category": "drink",
                                "note": "Kem, nước...",
                                "isOptional": false
                            },
                            {
                                "name": "Show Thực Cảnh 'Anh Hùng Cờ Lau'",
                                "amount": 500000,
                                "category": "ticket",
                                "note": "Trải nghiệm ban đêm gần hồ Kỳ Lân. 250k mỗi người x 2 người",
                                "isOptional": true
                            }
                        ],
                        "reason": "Tuyệt đối không ngồi vào quán Cafe nữa (để tránh lặp lại trải nghiệm đi Highlands Coffee ở chuyến đi trước). Vì đã mua đồ uống ở siêu thị, tay không bị vướng bận, tận hưởng 100% sự thảnh thơi khi dạo bộ."
                    }
                },
                {
                    "timeInfo": {
                        "startTime": "2026-05-29T21:45:00",
                        "endTime": "2026-05-29T22:15:00"
                    },
                    "title": "Di chuyển về Homestay",
                    "summary": "Lái xe cẩn thận trên đường từ Thành phố về Tràng An.",
                    "iconType": "time",
                    "details": {
                        "places": [
                            {
                                "name": "Phố đi bộ Ninh Bình",
                            },
                            {
                                "name": "Trang An Peaceful Homestay",
                            }
                        ],
                        "directions": {
                            "steps": [
                                "Tuyển đường Trung tâm thành phố -> Tràng An Homestay (~11km)"
                            ]
                        }
                    }
                },
                {
                    "timeInfo": {
                        "startTime": "2026-05-29T22:15:00",
                        "endTime": "2026-05-30T07:45:00"
                    },
                    "title": "Về Homestay, Tắm lần 2, Ngủ đủ giấc",
                    "summary": "Tắm lại bằng NƯỚC ẤM để xả gió lạnh. Lên giường ngủ sớm.",
                    "iconType": "hotel",
                    "details": {
                        "places": [
                            {
                                "name": "Trang An Peaceful Homestay"
                            }
                        ],
                        "directions": {
                            "steps": [
                                "Tắm nhanh bằng nước ấm nóng.",
                                "Skincare và lên giường đi ngủ sớm.",
                                "22:15 Có mặt tại home",
                                "23:00 Đi ngủ"
                            ]
                        },
                        "reason": "Tắm nước ấm giúp xả đi 'hàn khí' (gió lạnh) bị nhiễm sau khi lái xe máy buổi đêm, giúp bảo vệ sức khỏe và mang lại giấc ngủ sâu hơn cho ngày mai."
                    }
                }
            ]
        },
        // ==================== NGÀY 2 ====================
        {
            "dayInfo": {
                "day": 2,
                "date": "2026-05-30",
                "title": "Ngày 2: Chinh phục Tuyệt Tịnh Cốc & Show nhạc Forestival",
                "description": "Lịch trình Cân Bằng. Ăn no bền bỉ, chiến thuật Boomerang 3 Phase, bảo vệ nhan sắc 100%.",
                "mapUrl": "https://maps.app.goo.gl/Yp1sUpS9oTXXr5r16"
            },
            "timelineItems": [
                {
                    "timeInfo": {
                        "startTime": "2026-05-30T07:45:00",
                        "endTime": "2026-05-30T08:30:00"
                    },
                    "title": "Thức dậy & Ăn sáng",
                    "summary": "Thức dậy với 100% thể lực. Ăn sáng miễn phí tại homestay để nạp năng lượng cho buổi leo núi.",
                    "iconType": "food",
                    "details": {
                        "directions": {
                            "steps": [
                                "Vệ sinh cá nhân buổi sáng.",
                                "Ăn sáng tại nhà hàng của Homestay (Đã bao gồm trong tiền phòng)."
                            ]
                        },
                        "budgets": [
                            {
                                "name": "Ăn sáng ngày 2",
                                "amount": 0,
                                "category": "food",
                                "note": "Miễn phí tại homestay",
                                "isOptional": false
                            }
                        ]
                    }
                },
                {
                    "timeInfo": {
                        "startTime": "2026-05-30T08:30:00",
                        "endTime": "2026-05-30T10:45:00"
                    },
                    "title": "TUYỆT TỊNH CỐC (Lợi thế Vé Ghế Ngồi show nhạc)",
                    "summary": "Chạy xe 1.5km. Thuê xe đạp đôi dạo hồ, và NÊN LEO 200 bậc đá lên Động Am Tiên ngắm toàn cảnh.",
                    "iconType": "explore",
                    "details": {
                        "places": [
                            {
                                "name": "Tuyệt Tịnh Cốc (Động Am Tiên)",
                                "description": "Khu di tích có mặt hồ xanh ngọc bích bao quanh bởi núi đá hùng vĩ. Có 200 bậc đá dẫn lên động ngắm toàn cảnh.",
                                "mapUrl": ""
                            },
                            {
                                "name": "Đảo Khê Cốc",
                                "description": "(Tùy chọn) Nơi tổ chức Forestival 2025",
                                "mapUrl": ""
                            }
                        ],
                        "directions": {
                            "steps": [
                                "Chạy xe máy khoảng 1.5km từ homestay đến cổng khu du lịch.",
                                "Mua vé vào cổng và thuê xe đạp đôi để đạp chill chill quanh mặt hồ.",
                                "Gửi xe đạp ở chân núi và leo 200 bậc đá lên Động Am Tiên chụp ảnh."
                            ]
                        },
                        "budgets": [
                            {
                                "name": "Vé tham quan Tuyệt Tịnh Cốc",
                                "amount": 100000,
                                "category": "ticket",
                                "note": "Giá vé x 2 người. Tham khảo giá cũ chuyến đi 202511",
                                "isOptional": false
                            },
                            {
                                "name": "Thuê xe đạp đôi",
                                "amount": 100000,
                                "category": "ticket",
                                "note": "Một xe đạp đôi 50k x 2 người (2 xe)",
                                "isOptional": false
                            },
                            {
                                "name": "Gửi xe máy",
                                "amount": 15000,
                                "category": "transport",
                                "note": "Tham khảo giá cũ chuyến đi 202511",
                                "isOptional": false
                            }
                        ],
                        "reason": "Phân tích thể lực: Vì chiều nay dự concert có 'Vé Hạng Ghế Ngồi' an toàn, thể lực của bạn được bảo đảm, không sợ bị nhừ đôi chân. Do đó, hai bạn CÓ THỂ dư sức leo 200 bậc đá (Bù đắp cho việc lỡ chuyến đi trước không kịp leo). Hơn nữa, đi vào buổi sáng nắng chiếu rực rỡ, không bị 'sụp bóng núi' làm tối ảnh."
                    }
                },
                {
                    "timeInfo": {
                        "startTime": "2026-05-30T10:45:00",
                        "endTime": "2026-05-30T11:45:00"
                    },
                    "title": "Ăn trưa Tiện đường (Sát Homestay)",
                    "summary": "TỐI ƯU TUYẾN ĐƯỜNG: Thay vì về phòng nghỉ rồi lại phải đi ra, tạt ngay vào quán ăn trên trục đường về.",
                    "iconType": "food",
                    "details": {
                        "places": [
                            {
                                "name": "Garden Food & Drink (Ưu tiên 1)",
                                "description": "Quán ăn riêng tư, nên gọi mâm cơm trắng với thịt bò xào chín kỹ để an toàn cho dạ dày.",
                                "mapUrl": ""
                            },
                            {
                                "name": "Forest Sunset Bình Thái (Ưu tiên 2)",
                                "description": "Nằm sát ngay khu vực homestay.",
                                "mapUrl": ""
                            },
                            {
                                "name": "Nhà Hàng Thùy Dương (Ưu tiên 3)",
                                "description": "Phương án dự phòng. Phục vụ cơm gia đình.",
                                "mapUrl": ""
                            }
                        ],
                        "directions": {
                            "steps": [
                                "Rời khu du lịch, lái xe tạt thẳng vào quán ăn tiện đường.",
                                "Vào nhà vệ sinh của quán rửa mặt, rửa tay cho ráo mồ hôi leo núi.",
                                "Thong thả dùng bữa trưa."
                            ]
                        },
                        "budgets": [
                            {
                                "name": "Bữa trưa ngày 2",
                                "amount": 300000,
                                "category": "food",
                                "note": "Ăn trưa trên đường về homestay",
                                "isOptional": false
                            }
                        ],
                        "reason": "Giải quyết dứt điểm các hoạt động bên ngoài để khi về đến phòng là ĐÃ XONG MỌI VIỆC. Tránh tình trạng về phòng tháo giày ra nằm nghỉ 30 phút rồi lại phải lóc cóc xỏ giày dắt xe ra giữa trời trưa nắng 11h15 để đi ăn."
                    }
                },
                {
                    "timeInfo": {
                        "startTime": "2026-05-30T11:45:00",
                        "endTime": "2026-05-30T13:30:00"
                    },
                    "title": "Về phòng: Tắm mát & Ngủ sâu (1h45p)",
                    "summary": "Tắm tráng 15 phút. Khóa rèm, bật điều hòa và ngủ sâu trọn vẹn 1 tiếng 30 phút.",
                    "iconType": "hotel",
                    "details": {
                        "directions": {
                            "steps": [
                                "11:45 có mặt tại phòng. Dành đúng 15 phút tắm tráng nước mát xả sạch mồ hôi.",
                                "12:00 kéo rèm che tối phòng, bật điều hòa mát lạnh.",
                                "Ngủ sâu giấc 1 tiếng 30 phút (12:00 - 13:30)."
                            ]
                        },
                        "reason": "Khung thời gian đã được lùi lại để tối ưu hóa. 90 phút là một chu kỳ giấc ngủ (Sleep Cycle) hoàn hảo, thức dậy sẽ cảm thấy bùng nổ sinh lực, không hề bị đau đầu hay ngái ngủ."
                    }
                },
                {
                    "timeInfo": {
                        "startTime": "2026-05-30T13:30:00",
                        "endTime": "2026-05-30T14:30:00"
                    },
                    "title": "Chuẩn bị tổng lực trước giờ G (Makeup & Lên đồ)",
                    "summary": "Quỹ thời gian 1 tiếng vàng ngọc cho bạn gái lên đồ, trang phục và làm tóc chỉn chu.",
                    "iconType": "explore",
                    "details": {
                        "directions": {
                            "steps": [
                                "Dành trọn vẹn 1 tiếng cho bạn gái F5, làm tóc, trang điểm kỹ càng.",
                                "Xịt nước hoa, diện đồ đẹp chuẩn style festival."
                            ]
                        },
                        "reason": "Quỹ thời gian trang điểm 1 tiếng cố định giúp giữ tâm lý thong thả, thoải mái và mang lại thần thái rạng ngời nhất khi lên hình."
                    }
                },
                {
                    "timeInfo": {
                        "startTime": "2026-05-30T14:30:00",
                        "endTime": "2026-05-30T15:00:00"
                    },
                    "title": "Khoảng đệm (Buffer) tại phòng. Quyết định Thời tiết. Kích hoạt Kịch bản Ăn chiều.",
                    "summary": "Chốt mâm cơm chiều. Giấu đồ ăn vào túi đeo chéo. Kiểm tra thời tiết để quyết định giờ vặn ga.",
                    "iconType": "time",
                    "details": {
                        "directions": {
                            "steps": [
                                "<b>Bảo hiểm thời gian:</b> Nếu khâu makeup lố giờ, thời gian này sẽ tự động bù đắp. Nếu hoàn thành đúng hạn: Tranh thủ kiểm tra túi đồ hậu cần (lương khô, nước).",
                                "<b>Hành động Hậu Cần:</b> Lấy chai nước TH 350ml và lương khô/xúc xích giấu sát vào đáy túi đeo chéo (hoặc cốp xe máy). Không cầm lộ liễu.",

                                "<div class='mt-4 p-3 bg-blue-50 border-l-4 border-blue-500 rounded text-blue-900'><b>GỌI XÁC NHẬN QUÁN ĂN:</b><br/>"
                                + "• <b>BƯỚC 1 (Gọi điện chốt mâm):</b> Ngồi phòng máy lạnh gọi ngay cho <b>Cơm Niêu Việt Xưa Bái Đính</b>. Hỏi rõ: <i>'Khoảng 15h25 em qua, quán có nhận khách lẻ không?'</i>. Nếu có, chốt luôn mâm: Cơm, thịt lợn kho/luộc, trứng rán, rau.<br/>"
                                + "• <b>BƯỚC 2 (Kích hoạt dự phòng):</b> Nếu Cơm Niêu báo nghỉ chiều, gọi ngay cho <b>Nhà Hàng Thăng Long</b> chốt y hệt.<br/>",

                                "<div class='mt-4 p-3 bg-blue-50 border-l-4 border-blue-500 rounded text-blue-900'><b>TRẠM QUYẾT ĐỊNH THỜI TIẾT:</b><br/>"
                                + "• <b>Trời bình thường (Mặc định):</b> Ngồi nghỉ đúng 15:00 xuất phát.<br/>"
                                + "• <b>Trời quá Nắng gắt:</b> Ngồi lỳ trong phòng thêm 10 phút, <b>15:10</b> mới đi. (Thời gian phơi nắng ở quảng trường sẽ tự động ép ngắn lại).<br/>"
                                + "• <b>Trời rất Mát mẻ:</b> Đi sớm lúc <b>14:50</b> để chụp ảnh ngoài được lâu hơn.</div>"
                            ]
                        },
                        "reason": "Tuyệt đối không để sát giờ đi ăn mới gọi. Đặt bước gọi điện ở mốc này giúp hai bạn chủ động 100%. Buffer 30 phút là hệ thống 'Giảm xóc' tự động co giãn theo thời tiết, bảo vệ lớp makeup và sức khỏe tuyệt đối."
                    }
                },
                {
                    "timeInfo": {
                        "startTime": "2026-05-30T15:00:00",
                        "endTime": "2026-05-30T15:25:00"
                    },
                    "title": "Lái xe Chặng 1 (Homestay ➔ Quán ăn chiều)",
                    "summary": "Di chuyển từ Homestay ra nhà hàng để ăn bữa chiều. (Tính theo giờ xuất phát mặc định 15:00)",
                    "iconType": "explore",
                    "details": {
                        "places": [
                            {
                                "name": "Trục di chuyển Homestay -> Quán ăn chiều",
                                "description": "Lái xe đường thoáng chiều sớm."
                            }
                        ],
                        "directions": {
                            "steps": [
                                "Lái xe máy tà tà với tốc độ hóng gió thong thả (30-40km/h).",
                                "Chạy xe khi bụng rỗng giúp cơ thể thoải mái, hoàn toàn không bị xóc bụng."
                            ]
                        },
                        "reason": "Dành 25 phút giúp bảo vệ mái tóc bồng bềnh vừa sấy và lớp makeup tinh xảo của bạn gái khỏi gió tạt mạnh."
                    }
                },
                {
                    "timeInfo": {
                        "startTime": "2026-05-30T15:25:00",
                        "endTime": "2026-05-30T16:10:00"
                    },
                    "title": "Dùng bữa cơm chiều chắc bụng",
                    "summary": "Tới nơi đồ ăn đã dọn sẵn nóng hổi. Hai bạn thong thả nạp năng lượng trong 45 phút.",
                    "iconType": "food",
                    "details": {
                        "places": [
                            {
                                "name": "Cơm Niêu Việt Xưa - Bái Đính (PHƯƠNG ÁN CHÍNH)",
                                "description": "Cách show 2km. Vị trí hoàn hảo nhất. Nhược điểm: Rất dễ vỡ trận vì gần sự kiện."
                            },
                            {
                                "name": "Nhà Hàng Thăng Long (DỰ PHÒNG 1)",
                                "description": "Cách show 7.6km. Không gian siêu rộng. Kích hoạt nếu phương án chính quá tải."
                            },
                            {
                                "name": "Quán ăn sát Homestay (DỰ PHÒNG 2)",
                                "description": "Cách show 11.5km. Kích hoạt nếu cả 2 nhà hàng lớn đều nghỉ ca chiều."
                            }
                        ],
                        "directions": {
                            "steps": [
                                "<b>Thưởng thức bữa ăn tại nhà hàng:</b> Nhờ chiến thuật gọi chốt trước từ lúc ở phòng, khi đến nơi đồ ăn đã dọn sẵn.",
                                "Hai bạn chỉ việc tận hưởng không gian mát mẻ và dùng bữa trong 45 phút. Không mất thời gian xem menu hay chờ bếp nấu."
                            ]
                        },
                        "budgets": [
                            {
                                "name": "Bữa cơm chiều (Cơm, thịt, trứng, rau)",
                                "amount": 300000,
                                "category": "food",
                                "note": "Dự kiến hóa đơn mâm cơm nhà nhẹ bụng",
                                "isOptional": false
                            }
                        ],
                        "reason": "MỐC THỜI GIAN VÀNG (15:25). Dạ dày cách bữa trưa 4 tiếng nên ăn rất ngon miệng. Ăn no giờ này sẽ giúp duy trì năng lượng bền bỉ đến 23:00 mà nhà hàng lại chưa bị quá tải bởi khách ăn tối."
                    }
                },
                {
                    "timeInfo": {
                        "startTime": "2026-05-30T16:10:00",
                        "endTime": "2026-05-30T16:25:00"
                    },
                    "title": "Lái xe Chặng 2 (Quán ăn ➔ Show & Gửi xe máy)",
                    "summary": "Di chuyển đoạn ngắn cuối cùng tiến vào khu vực Quảng trường Bình Minh.",
                    "iconType": "logistics",
                    "details": {
                        "places": [
                            {
                                "name": "Quảng Trường Bình Minh",
                                "description": "Nơi tổ chức show nhạc Forestival 2026."
                            }
                        ],
                        "directions": {
                            "steps": [
                                "Lái xe máy nhích qua đoạn đường bắt đầu ùn ứ.",
                                "Tìm bãi gửi xe an toàn (Khoảng cách không quá 300m)."
                            ]
                        },
                        "budgets": [
                            {
                                "name": "Gửi xe máy tại show nhạc",
                                "amount": 30000,
                                "category": "transport",
                                "note": "Có thể bị độn giá",
                                "isOptional": false
                            }
                        ],
                        "reason": "Do điểm dừng ăn cơm chỉ cách show 2km, nhích xe cực kỳ ngắn khi bụng đã no, triệt tiêu việc xóc bụng mệt mỏi."
                    }
                },
                {
                    "timeInfo": {
                        "startTime": "2026-05-30T16:25:00",
                        "endTime": "2026-05-30T16:55:00"
                    },
                    "title": "[PHASE 1 - NGOÀI] Đổi vòng & Sống ảo sảnh ngoài",
                    "summary": "Đổi vòng tay nhanh gọn. Chụp ảnh hoàng hôn và qua cổng an ninh.",
                    "iconType": "camera",
                    "details": {
                        "directions": {
                            "steps": [
                                "Dành <b>5 phút</b> xếp hàng đưa vé để lấy Vòng tay (Quầy mở từ 10h sáng).",
                                "Bước qua cổng Soát vé & An ninh (Khu trải nghiệm mở từ 15h). Tự tin đi qua vì đã giấu kín đồ ăn/nước ở đáy túi đeo chéo.",
                                "Dành <b>25 phút</b> chụp ảnh hoàng hôn với các Booth nhãn hàng bên ngoài sảnh. Không cần quá vội."
                            ]
                        },
                        "reason": "Thời lượng 30 phút là vừa đủ để chụp ảnh sảnh ngoài mà không bị phơi nắng quá lâu gây chảy makeup. Cấm mang đồ ăn ngoài là luật ngầm để ép mua F&B đắt đỏ bên trong, hãy giấu thật kỹ."
                    }
                },
                {
                    "timeInfo": {
                        "startTime": "2026-05-30T16:55:00",
                        "endTime": "2026-05-30T17:00:00"
                    },
                    "title": "Xếp hàng trước cổng Sân khấu",
                    "summary": "Tiến đến cổng kiểm soát cuối cùng, chuẩn bị vào khu vực sân khấu.",
                    "iconType": "alert-triangle",
                    "details": {
                        "directions": {
                            "steps": [
                                "Đứng chực sẵn trước cổng sân khấu, đợi BTC gỡ rào đúng 17:00."
                            ]
                        },
                        "reason": "Luôn có mặt trước 5 phút để nằm trong top đầu những người bước vào sân khấu, chiếm lợi thế về mặt không gian chụp ảnh."
                    }
                },
                {
                    "timeInfo": {
                        "startTime": "2026-05-30T17:00:00",
                        "endTime": "2026-05-30T17:40:00"
                    },
                    "title": "[PHASE 2 - TRONG] Chụp ảnh độc quyền Sân khấu",
                    "summary": "Đặc quyền VIP: Sân khấu vắng tanh, hoàng hôn buông. Chụp 30 phút, tìm ghế 10 phút.",
                    "iconType": "sparkles",
                    "details": {
                        "directions": {
                            "steps": [
                                "Cổng Sân khấu mở, đi thẳng vào khu Rừng A1.",
                                "Dành <b>30 phút</b> chụp những bức ảnh 'Để đời' với background sân khấu khổng lồ dưới nắng hoàng hôn khi hàng ghế còn vắng bóng người.",
                                "Dành <b>10 phút</b> đi thong thả dọc theo các hàng, xác định chính xác vị trí Hàng N, Ghế 29 & 30."
                            ]
                        },
                        "reason": "Lợi thế vé VIP có số ghế là bạn không phải chạy thục mạng tranh chỗ như vé GA. Đi sớm 17h00 mang lại không gian chụp ảnh xa hoa và riêng tư nhất."
                    }
                },
                {
                    "timeInfo": {
                        "startTime": "2026-05-30T17:40:00",
                        "endTime": "2026-05-30T17:55:00"
                    },
                    "title": "[PHASE 3 - NGOÀI LẠI] Dạo Merch & Trải nghiệm (Boomerang)",
                    "summary": "Đi ngược ra ngoài sảnh chung để dạo chơi khi đám đông đã ùa vào sân khấu.",
                    "iconType": "shopping-cart",
                    "details": {
                        "directions": {
                            "steps": [
                                "Kích hoạt chiến thuật Boomerang: Đi bộ ngược ra ngoài Khu trải nghiệm và khu Merchandise.",
                                "Dành <b>15 phút</b> lướt ngang ngắm nghía các quầy Merchandise (không mua thì xem cho biết) và tạt qua chơi minigame của nhà tài trợ.",
                                "Lúc này sảnh ngoài vô cùng vắng vẻ và thoáng mát."
                            ]
                        },
                        "reason": "Chiến thuật Boomerang thần thánh! Bạn nhường đám đông chen chúc lúc 16h30, và đi ra chơi lại vào lúc 17h40 khi tất cả mọi người đang hoảng loạn chạy vào trong rạp."
                    }
                },
                {
                    "timeInfo": {
                        "startTime": "2026-05-30T17:55:00",
                        "endTime": "2026-05-30T18:00:00"
                    },
                    "title": "Quay về ghế & Ổn định chỗ ngồi",
                    "summary": "Đi thẳng về vị trí đã xác định, ngồi xuống, uống nước, đón Opening Show.",
                    "iconType": "check-circle",
                    "details": {
                        "directions": {
                            "steps": [
                                "Do đã định vị từ Phase 2, chỉ mất đúng 5 phút để tản bộ thẳng về Ghế 29 & 30.",
                                "Ngồi xuống, cất gọn túi chéo, uống hớp nước và sẵn sàng 'cháy'."
                            ]
                        },
                        "reason": "Kỷ luật thép: Rút gọn mốc ổn định xuống 5 phút, đảm bảo có mặt trước 18:00 để không lỡ bất kỳ khoảnh khắc khai mạc nào của show."
                    }
                },
                {
                    "timeInfo": {
                        "startTime": "2026-05-30T18:00:00",
                        "endTime": "2026-05-30T22:30:00"
                    },
                    "title": "Quẩy Forestival (Rừng A1 - Hàng N)",
                    "summary": "Vị trí: Rừng A1, Hàng N, Ghế 29 & 30. Cháy hết mình cùng âm nhạc!",
                    "iconType": "ticket",
                    "details": {
                        "places": [
                            {
                                "name": "Quảng Trường Bình Minh",
                                "description": "Vé khu vực Rừng A1, Hàng N, Ghế 29 & 30. Chỗ ngồi VIP đảm bảo tầm nhìn và thể lực.",
                                "mapUrl": ""
                            }
                        ],
                        "directions": {
                            "steps": [
                                "18:00 Chính thức bắt đầu chương trình.",
                                "Tận hưởng các màn trình diễn của nghệ sĩ (Có thể kéo dài đến 22:30 hoặc 23:00).",
                                "CHIẾN THUẬT NẠP NĂNG LƯỢNG: ĐÓI thì lấy Lương Khô (xúc xích) trong túi chéo ra cắn. KHÁT thì chỉ nhấp môi Nước để đỡ khát."
                            ]
                        },
                        "budgets": [
                            {
                                "name": "Vé nhạc hội Forestival 2026",
                                "amount": 6000000,
                                "category": "ticket",
                                "note": "Khu vực Rừng A1, Hàng N, Ghế 29-30. Mỗi vé 3tr x 2 vé",
                                "paidBy": "HieuND",
                                "isOptional": false
                            },
                            {
                                "name": "Merchandise show nhạc (merch)",
                                "amount": 500000,
                                "category": "ticket",
                                "note": "Các sản phẩm lưu niệm độc quyền: Áo thun, Khăn bandana, Ô cầm tay, Túi tote vải, Bình giữ nhiệt, Quạt cầm tay, Mũ lưỡi trai",
                                "isOptional": true
                            }
                        ],
                        "reason": "Đặc quyền vé Ngồi: Bạn có thể thong thả xem, mỏi thì ngồi xuống nghỉ, lúc nghệ sĩ sung thì đứng lên quẩy.<br>Cảnh báo sinh lý: Tuyệt đối KHÔNG xếp hàng mua đồ ăn vỉa hè (tốn thời gian/chặt chém) và KHÔNG uống quá nhiều nước để tránh việc bàng quang đầy phải đi tìm nhà vệ sinh (vô cùng ám ảnh ở các lễ hội đông người)."
                    }
                },
                {
                    "timeInfo": {
                        "startTime": "2026-05-30T22:30:00",
                        "endTime": "2026-05-30T23:00:00"
                    },
                    "title": "Dư âm & Chụp ảnh nốt",
                    "summary": "Nán lại 30 phút. Chụp ảnh với background sân khấu khi đám đông đã tản bớt.",
                    "iconType": "camera",
                    "details": {
                        "directions": {
                            "steps": [
                                "Đừng vội chạy ra bãi xe ngay khi show kết thúc.",
                                "Chờ 30 phút chụp nốt vài bức ảnh lưu niệm với sân khấu."
                            ]
                        },
                        "reason": "Tránh tắc nghẽn bãi gửi xe: 90% dòng người sẽ ùn ùn kéo ra cùng một lúc gây kẹt xe kinh hoàng. Việc nán lại giúp bạn thoát cảnh hít khói xe và chen lấn."
                    }
                },
                {
                    "timeInfo": {
                        "startTime": "2026-05-30T23:00:00",
                        "endTime": "2026-05-31T00:00:00"
                    },
                    "title": "Vượt đường đêm về & Phục hồi",
                    "summary": "Đi chậm bám đuôi ô tô ké đèn pha. Về tắm nước ấm nóng, ăn mì ly chống đói.",
                    "iconType": "hotel",
                    "details": {
                        "directions": {
                            "steps": [
                                "Lái xe tốc độ chậm, bám theo đuôi một chiếc ô tô để ké ánh sáng đèn pha (Đường về Tràng An khá vắng và tối).",
                                "Về đến nơi: TẮM NƯỚC ẤM NÓNG ngay lập tức (Giúp giãn cơ bắp) & Tẩy trang.",
                                "Úp bát mì ly đã mua ở WinMart, ăn thêm xúc xích bù năng lượng đã mất.",
                                "Lên giường, ôm nhau xem lại ảnh/video quay được tại show."
                            ]
                        },
                        "reason": "Cơ bắp sau khi nhún nhảy sẽ rất căng, nước ấm là liệu pháp vật lý trị liệu tức thời. Việc úp mì ăn đêm trong phòng máy lạnh cùng nhau sau một show nhạc mang lại cảm giác cực kỳ hạnh phúc và ấm áp."
                    }
                }
            ]
        },
        // ==================== NGÀY 3 ====================
        {
            "dayInfo": {
                "day": 3,
                "date": "2026-05-31",
                "title": "Ngày 3: Kỷ luật Thời gian & Trở về",
                "description": "Kỷ luật trả phòng 11h, thảnh thơi dạo bộ, ăn trưa máy lạnh.",
                "mapUrl": ""
            },
            "timelineItems": [
                {
                    "timeInfo": {
                        "startTime": "2026-05-31T08:00:00",
                        "endTime": "2026-05-31T09:00:00"
                    },
                    "title": "Thức dậy & Ăn sáng",
                    "summary": "Đêm qua ngủ muộn nên báo thức 08:00 là đảm bảo ngủ cực sâu. Thức dậy, hít thở không khí trong lành, ăn sáng tại homestay.",
                    "iconType": "food",
                    "details": {
                        "directions": {
                            "steps": [
                                "Tắt báo thức, từ từ thức dậy hít thở không khí trong lành của buổi sáng Ninh Bình.",
                                "Xuống nhà hàng ăn sáng."
                            ]
                        },
                        "budgets": [
                            {
                                "name": "Ăn sáng ngày 3",
                                "amount": 0,
                                "category": "food",
                                "note": "Miễn phí tại homestay",
                                "isOptional": false
                            }
                        ]
                    }
                },
                {
                    "timeInfo": {
                        "startTime": "2026-05-31T09:00:00",
                        "endTime": "2026-05-31T10:30:00"
                    },
                    "title": "[3 LỰA CHỌN] Tôn Trọng Thể Trạng",
                    "summary": "Sức khỏe là trên hết! Hãy chọn 1 trong 3 tùy tình hình thực tế.",
                    "iconType": "relax",
                    "details": {
                        "directions": {
                            "steps": [
                                "😴 KẾ HOẠCH A: Ngủ Bù & Đi Dạo (Ưu tiên). Nếu cơ thể quá mệt: Tắt báo thức ngủ nướng thêm. Dậy muộn thì chỉ đi dạo hít thở không khí quanh khuôn viên homestay, tuyệt đối không vận động mạnh.",
                                "🌊 KẾ HOẠCH B: Bơi Lội Trị Liệu. Nếu vẫn còn sức: Ngâm mình trong hồ bơi để 'vật lý trị liệu', làm dịu các bó cơ đùi sau đêm nhạc. LƯU Ý: Phải kết thúc việc bơi lúc 10h15 để kịp thời gian vệ sinh.",
                                "☕ KẾ HOẠCH C: Cafe Gần Homestay. Dành cho trường hợp đã bơi vào chiều Thứ 6: Dắt xe ra một quán cafe mộc mạc NGAY GẦN homestay. Ăn mặc thoải mái, uống nước tĩnh tâm thư giãn, gần giờ về tạt qua lấy đồ."
                            ]
                        },
                        "budgets": [
                            {
                                "name": "Cafe sáng Chủ nhật",
                                "amount": 120000,
                                "category": "drink",
                                "note": "Chỉ phát sinh nếu chọn Kế hoạch này",
                                "isOptional": true
                            }
                        ],
                        "reason": "Quyền lực của sự linh hoạt: Không ép bản thân theo một lịch trình cứng nhắc. Cảm thấy mệt thì ngủ, cảm thấy mỏi thì bơi, cảm thấy chán thì uống cafe. Mọi lựa chọn đều hướng đến sự phục hồi tối đa."
                    }
                },
                {
                    "timeInfo": {
                        "startTime": "2026-05-31T10:30:00",
                        "endTime": "2026-05-31T11:00:00"
                    },
                    "title": "Vệ sinh & Đóng gói siêu tốc",
                    "summary": "30 phút vàng ngọc thao tác nhanh gọn. Gói gọn toàn bộ đồ đạc.",
                    "iconType": "logistics",
                    "details": {
                        "directions": {
                            "steps": [
                                "Tắm tráng nhanh bằng nước mát để cơ thể thơm tho (phòng trường hợp ra mồ hôi khi bơi hoặc đi dạo bên ngoài).",
                                "Bạn gái trang điểm nhanh gọn, mặc đồ xinh xắn tươm tất để chuẩn bị lên ảnh.",
                                "Hai bạn cuộn quần áo bẩn, dùng chung không gian vali, nhét toàn bộ đồ đạc vào chiếc Vali Xiaomi 20 inch cực kỳ gọn gàng chỉ trong 10 phút."
                            ]
                        },
                        "reason": "Cần hoàn thành mọi việc trước 11:00 để tránh bị Homestay tính thêm tiền phạt quá giờ. Sự chuẩn bị từ tối hôm qua giúp việc đóng gói trở nên siêu tốc."
                    }
                },
                {
                    "timeInfo": {
                        "startTime": "2026-05-31T11:00:00",
                        "endTime": "2026-05-31T11:15:00"
                    },
                    "title": "Trả Phòng & Trả Xe (Đồng bộ)",
                    "summary": "Cắt đứt mọi vướng bận, vali gọn gàng, đầu óc thanh thản 100%.",
                    "iconType": "hotel",
                    "details": {
                        "directions": {
                            "steps": [
                                "Cầm hành lý xuống sảnh lễ tân.",
                                "Checkout phòng và bàn giao lại chìa khóa xe máy."
                            ]
                        },
                        "budgets": [
                            {
                                "name": "Các dịch vụ phát sinh tại Homestay",
                                "amount": 0,
                                "category": "hotel",
                                "note": "Cập nhật thực tế khi checkout. Thường không phát sinh",
                                "isOptional": true
                            }
                        ],
                        "reason": "CHIẾN THUẬT TỐI THƯỢNG: Trả xe máy có hạn là 12h00, nhưng đừng cố tận dụng 1 giờ chênh lệch này để chạy đi chơi Tuyệt Tịnh Cốc! Nếu đi, bạn sẽ bị đổ mồ hôi bẩn người mà KHÔNG CÒN PHÒNG ĐỂ TẮM nữa. Hãy thực hiện 'Đồng bộ hóa': Trả phòng và trả xe CÙNG LÚC đúng 11h00. Chấp nhận bỏ qua 1 giờ thuê xe để đổi lấy sự sạch sẽ, không cập rập và không bị tính tiền phạt checkout muộn (nếu chủ nhà khó tính)."
                    }
                },
                {
                    "timeInfo": {
                        "startTime": "2026-05-31T11:15:00",
                        "endTime": "2026-05-31T11:45:00"
                    },
                    "title": "Thư giãn tại sảnh & Chụp ảnh cuối",
                    "summary": "Gửi Vali tại lễ tân. Hai bạn đi dạo tay không trong khuôn viên homestay, ngồi ở sảnh chờ hoặc hồ bơi chụp những bức ảnh kỷ niệm cuối cùng dưới nắng nhẹ.",
                    "iconType": "explore",
                    "details": {
                        "directions": {
                            "steps": [
                                "Nhờ lễ tân giữ hộ Vali Xiaomi.",
                                "Thong thả dạo bước tay không trong khu vườn hoặc ngồi xích đu cạnh hồ bơi.",
                                "Chụp những bức ảnh kỷ niệm cuối cùng với background resort cực xịn."
                            ]
                        },
                        "reason": "Đây là cách 'giết thời gian chờ đợi' thông minh, sang trọng và chuẩn style nghỉ dưỡng 5 sao nhất, tận dụng triệt để không gian đẹp của Homestay mà mình đã trả tiền."
                    }
                },
                {
                    "timeInfo": {
                        "startTime": "2026-05-31T11:45:00",
                        "endTime": "2026-05-31T12:15:00"
                    },
                    "title": "Di chuyển bằng Taxi",
                    "summary": "Gọi Taxi/Xanh SM chở 2 người + Vali rời Tràng An ra Trung tâm TP Ninh Bình.",
                    "iconType": "time",
                    "details": {
                        "directions": {
                            "steps": [
                                "Tận hưởng không gian ô tô máy lạnh tránh cái nắng gắt buổi trưa."
                            ]
                        },
                        "budgets": [
                            {
                                "name": "Taxi từ Homestay ra Trung tâm",
                                "amount": 160000,
                                "category": "transport",
                                "note": "Di chuyển xa khoảng 10Km. Tính theo cước app",
                                "isOptional": false
                            }
                        ]
                    }
                },
                {
                    "timeInfo": {
                        "startTime": "2026-05-31T12:15:00",
                        "endTime": "2026-05-31T13:45:00"
                    },
                    "title": "Bữa trưa & Máy lạnh phòng chờ (Đợi xe X.E Việt Nam)",
                    "summary": "Kéo vali vào nhà hàng máy lạnh lớn. Thong thả dùng bữa và nghỉ ngơi 1.5 tiếng.",
                    "iconType": "food",
                    "details": {
                        "places": [
                            {
                                "name": "Cơm Gà Phố Cổ (Ưu tiên 1)",
                                "description": "215 Lê Thái Tổ - Đã xác thực có máy lạnh, không gian kín, đồ ăn khô ráo sạch sẽ, an toàn bụng tuyệt đối.",
                                "mapUrl": "https://maps.app.goo.gl/WuU3q1hHrJUXveCZ9"
                            },
                            {
                                "name": "Cơm Niêu Việt Xưa (Ưu tiên 2)",
                                "description": "80 Tràng An - Đã xác thực có phòng lạnh riêng, không ồn ào.",
                                "mapUrl": "https://maps.app.goo.gl/sn5vBEBQYzmyKsRaA"
                            },
                            {
                                "name": "Rơm Vàng (Ưu tiên 3)",
                                "description": "112 Lương Văn Tụy - Không gian rộng, máy lạnh buốt giá, đủ chỗ để vali lớn.",
                                "mapUrl": "https://maps.app.goo.gl/2AX1jGYwshFwJWmJA"
                            }
                        ],
                        "directions": {
                            "mapUrl": "https://maps.app.goo.gl/5QXwnAwXyTqcDrNH8",
                            "steps": [
                                "Các lựa chọn quán ăn cách nhau 500m - 900m ở hồ Kỳ Lân, phố đi bộ trung tâm thành phố.",
                                "Ăn xong nán lại nhà hàng nghỉ ngơi, uống nước, lướt web.",
                                "13:45 kéo vali ra cửa nhà hàng chuẩn bị.",
                                "13:50 xe X.E Việt Nam đón tận nơi."
                            ]
                        },
                        "budgets": [
                            {
                                "name": "Bữa trưa ngày cuối",
                                "amount": 300000,
                                "category": "food",
                                "note": "Ăn trưa và nghỉ ngơi tại nhà hàng trước khi lên xe quay về Hà Nội",
                                "isOptional": false
                            }
                        ],
                        "reason": "Phản biện chiến thuật: Việc hai bạn ngồi thong thả dùng bữa 1.5 tiếng ở các nhà hàng máy lạnh lớn là hoàn toàn lịch sự, không ai đuổi. Đây là phòng chờ (waiting lounge) lý tưởng nhất để giữ cho cơ thể mát mẻ và thơm tho tuyệt đối trước khi bước lên xe Limousine chật hẹp."
                    }
                },
                {
                    "timeInfo": {
                        "startTime": "2026-05-31T13:45:00",
                        "endTime": "2026-05-31T16:30:00"
                    },
                    "title": "Limousine về Hà Nội. Hãng X.E Việt Nam",
                    "summary": "Check-in nhà xe lúc 13:45. Lên xe lúc 13:50, ngả ghế massage ngủ một giấc thư giãn.",
                    "iconType": "logistics",
                    "details": {
                        "places": [
                            {
                                "name": "Điểm đón khách tại Ninh Bình",
                                "description": "Văn phòng X.E VietNam Ninh Bình.",
                                "mapUrl": "",
                            },
                            {
                                "name": "Điểm trả khách tại Hà Nội",
                                "description": "31A Nguyễn Quốc Trị, Yên Hòa. Xe Limousine trả khách tại điểm này.",
                                "mapUrl": "https://maps.app.goo.gl/KpPgo1dwZor4H3iJ6",
                            }
                        ],
                        "directions": {
                            "steps": [
                                "Nhờ nhà xe Limousine đến đón ngay tại cửa nhà hàng. (xe trung chuyển, xe điện VinFast)",
                                "Ngả ghế ngủ một mạch về thủ đô.",
                                "Dự kiến khởi hành lúc 14:00. Đã cộng thêm 30 phút buffer kẹt xe chiều Chủ Nhật nên dự kiến 16:30 về tới Hà Nội.",
                                "Kịch bản chạy nhanh: Nếu 15:30-16:00 về tới nhà, thong thả cất đồ, gọi trà sữa, giặt giũ quần áo."
                            ]
                        },
                        "budgets": [
                            {
                                "name": "Vé xe Limousine chiều về",
                                "amount": 400000,
                                "category": "transport",
                                "note": "200k mỗi người x 2 người. Giống chiều đi",
                                "paidBy": "ChiBV",
                                "isOptional": false
                            }
                        ],
                        "reason": "Kết thúc chuyến đi hoàn mỹ, với một cơ thể sạch sẽ thơm tho và 100% thanh năng lượng sẵn sàng cho Thứ 2 đi làm!"
                    }
                },
                {
                    "timeInfo": {
                        "startTime": "2026-05-31T16:30:00",
                        "endTime": "2026-05-31T17:00:00"
                    },
                    "title": "Taxi di chuyển về nhà 48 Tố Hữu",
                    "summary": "Từ điểm trả khách của xe Limousine, bắt Taxi về thẳng 48 Tố Hữu.",
                    "iconType": "car",
                    "details": {
                        "places": [
                            {
                                "name": "31A Nguyễn Quốc Trị, Yên Hòa, Hà Nội",
                                "description": "Điểm xuống xe Limousine.",
                                "mapUrl": "https://maps.app.goo.gl/KpPgo1dwZor4H3iJ6",
                            },
                            {
                                "name": "48 Tố Hữu",
                                "description": "Điểm về nhà.",
                                "mapUrl": "https://maps.app.goo.gl/23y16XQJeVDWL1Zd8"
                            }
                        ],
                        "directions": {
                            "steps": [
                                "Xuống xe Limousine tại 31A Nguyễn Quốc Trị, Yên Hòa, Hà Nội.",
                                "Đặt Taxi/Xanh SM từ điểm trả khách về thẳng 48 Tố Hữu.",
                                "Kết thúc hành trình nghỉ dưỡng hoàn mỹ!"
                            ]
                        },
                        "budgets": [
                            {
                                "name": "Taxi về 48 Tố Hữu",
                                "amount": 50000,
                                "category": "transport",
                                "note": "Ước tính cước Taxi chặng cuối",
                                "isOptional": false
                            }
                        ],
                        "reason": "Chặng 'Last-mile' hoàn hảo: Đã định vị sẵn quãng đường và dự trù sẵn ngân sách 50k. Vừa xuống Limousine là có thể gọi xe về thẳng nhà, đảm bảo 100% năng lượng sẵn sàng cho Thứ 2 đi làm."
                    }
                }
            ]
        }
    ]
};