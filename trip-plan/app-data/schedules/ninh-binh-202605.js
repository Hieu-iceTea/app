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
                "mapUrl": ""
            },
            "timelineItems": [
                {
                    "timeInfo": {
                        "startTime": "2026-05-29T06:00:00",
                        "endTime": "2026-05-29T09:00:00"
                    },
                    "title": "Chuẩn bị trước khi khởi hành",
                    "summary": "Tối hôm trước chuẩn bị hết & ngủ sớm. Sáng dậy sớm chuẩn bị riêng. Gặp nhau kiểm tra đồ & xếp đồ chung.",
                    "iconType": "time",
                    "details": {
                        "directions": {
                            "mapUrl": "https://maps.app.goo.gl/Jf7rir8LokrZMicf7",
                            "steps": [
                                "<b>Hành Lý:</b> Đưa đồ từ tối hôm trước<br>" +
                                "+ 1 Vali của Hiếu (2 pack đồ riêng của 2 người)<br>" +
                                "+ (Tùy chọn 1 túi trống) <br>" +
                                "+ Túi đeo chéo của Hiếu <br>" +
                                "+ Túi xách của Chi <br>" +
                                "+ Túi giày",
                                "08:00 Vân Chi gửi xe ở công ty.",
                                "08:15 Cả 2 có mặt. Sẵn sàng xếp đồ chung.",
                                "08:30 Đặt taxi di chuyển đến điểm đón Limousine."
                            ]
                        },
                        "places": [
                            {
                                "name": "48 Tố Hữu",
                                "description": "Địa điểm gặp nhau",
                                "mapUrl": "https://maps.app.goo.gl/23y16XQJeVDWL1Zd8"
                            },
                            {
                                "name": "BigC Thăng Long (Cổng sau)",
                                "description": "Điểm đón xe Limousine",
                                "mapUrl": "https://maps.app.goo.gl/rBcrAprWPm7YuCrj7"
                            }
                        ]
                    }
                },
                {
                    "timeInfo": {
                        "startTime": "2026-05-29T09:00:00",
                        "endTime": "2026-05-29T11:00:00"
                    },
                    "title": "Khởi hành Limousine",
                    "summary": "Đẩy giờ đi sớm lên 09:00. Gửi Vali cốp xe, ngả ghế massage ngủ êm ái.",
                    "iconType": "time",
                    "details": {
                        "places": [
                            {
                                "name": "Điểm đón tại Hà Nội. BigC Thăng Long (Cổng sau)",
                                "description": "Lên xe Limousine ghế massage thoải mái để giữ sức.",
                                "mapUrl": "https://maps.app.goo.gl/rBcrAprWPm7YuCrj7"
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
                                "Có mặt trước 9h (lúc xe khởi hành). Tố Hữu -> Điểm đón xe Limousine (Gần BigC Thăng Long).",
                                "Thời gian 2 tiếng đã bao gồm thời gian đón trả khách (buffer an toàn).",
                                "Hành lý mang gọn nhẹ để tiện di chuyển buổi trưa (Không xách nước mỏi tay từ HN)."
                            ]
                        },
                        "budgets": [
                            {
                                "name": "Taxi đi đến điểm đón Limousine",
                                "amount": 80000,
                                "category": "transport",
                                "note": "Nếu xe Limousine đón cố định",
                                "isOptional": true
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
                        "reason": "Chiến thuật: Đi lúc 09:00 giúp né giờ cao điểm ăn trưa tại Ninh Bình, đồng thời bạn không phải thức dậy quá sớm ở Hà Nội."
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
                        "reason": "Lưu ý: Quán bình dân, không máy lạnh xịn. Khung giờ 11h quán vắng khách nên vali để góc cực kỳ thoải mái. Cần ăn nhanh gọn để nhường chỗ và tránh nóng."
                    }
                },
                {
                    "timeInfo": {
                        "startTime": "2026-05-29T11:40:00",
                        "endTime": "2026-05-29T12:30:00"
                    },
                    "title": "Trú nóng ở siêu thị & Mua sắm hậu cần show nhạc",
                    "summary": "Bắt Taxi quãng đường ngắn sang Siêu thị WinMart. VÀO QUẦY GỬI VALI MIỄN PHÍ. Đi tay không hưởng điều hòa 45 phút. Chuần bị đủ đồ bữa ăn tối show nhạc ngày mai.",
                    "iconType": "explore",
                    "details": {
                        "places": [
                            {
                                "name": "Siêu thị WinMart",
                                "description": "Số 848 Trần Hưng Đạo. Đây là đại siêu thị lớn (không phải WinMart+ nhỏ lẻ), có máy lạnh cực mát và quầy giữ đồ.",
                                "mapUrl": "https://maps.app.goo.gl/VoSg4zk1hVG8ZEND9"
                            }
                        ],
                        "directions": {
                            "steps": [
                                "Bắt Taxi quãng đường ngắn (~1.5km) từ quán Bún chả sang Siêu thị.",
                                "Gửi vali tại quầy miễn phí để đi tay không cho nhẹ nhàng.",
                                "Thong thả mua 2 chai nước 1.5L và mì ly dự trữ cho đêm nhạc hội.",
                                "Chuẩn bị đủ đồ bữa ăn tối show nhạc ngày mai. Ví dụ bánh, sữa, lương khô, nước điện giải."
                            ]
                        },
                        "budgets": [
                            {
                                "name": "Đồ siêu thị (Nước lọc, Nước điện giải, Lương khô, Bánh mỳ, Mì ly, Xúc xích...)",
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
                        "reason": "Chiến thuật hoàn hảo: Giải quyết được 'thời gian chết' chờ check-in homestay (14:00 mới được nhận phòng), tránh được cái nắng gắt giữa trưa, không tốn tiền đi cafe vô ích và mua đủ đồ hậu cần giá rẻ cho đêm nhạc."
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
                                "name": "Cơm Niêu Việt Xưa (Ưu tiên 1)",
                                "description": "80 Tràng An - Nhà hàng có phòng lạnh, cơm ngon êm bụng.",
                                "mapUrl": ""
                            },
                            {
                                "name": "Rơm Vàng (Ưu tiên 2)",
                                "description": "112 Lương Văn Tụy - Không gian sang trọng, sạch sẽ.",
                                "mapUrl": ""
                            },
                            {
                                "name": "Heo Say Xỉn (Ưu tiên 3)",
                                "description": "2 Tràng An - Đồ nướng (Lưu ý: Có rủi ro bị ám mùi khói lên tóc/quần áo).",
                                "mapUrl": ""
                            }
                        ],
                        "directions": {
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
                                "name": "Nghĩa Hair Salon",
                                "description": "12 Lương Văn Tụy. (Hoặc tìm tiệm tóc lân cận trên cùng tuyến phố).",
                                "mapUrl": ""
                            }
                        ],
                        "directions": {
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
                        "reason": "Chiến lược: Tuyệt đối không ngồi vào quán Cafe nữa (để tránh lặp lại trải nghiệm đi Highlands Coffee ở chuyến đi tháng 11/2025). Hơn nữa, vì buổi trưa đã mua đủ đồ uống ở siêu thị, tay không bị vướng bận xách đồ, giúp tận hưởng 100% sự thảnh thơi khi dạo bộ."
                    }
                },
                {
                    "timeInfo": {
                        "startTime": "2026-05-29T21:45:00",
                        "endTime": "2026-05-29T22:15:00"
                    },
                    "title": "Di chuyển về Homestay",
                    "summary": "Lái xe cẩn thận trên đường từ Thành phố về Tràng An.",
                    "iconType": "nightlife",
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
                "description": "Chinh phục sáng sớm, ăn trưa tiện đường để về ngủ sâu, quẩy hết mình vào ban đêm.",
                "mapUrl": ""
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
                        "reason": "Chiến thuật 'Bản đồ không gian': Giải quyết dứt điểm các hoạt động bên ngoài để khi về đến phòng là ĐÃ XONG MỌI VIỆC. Tránh tình trạng về phòng tháo giày ra nằm nghỉ 30 phút rồi lại phải lóc cóc xỏ giày dắt xe ra giữa trời trưa nắng 11h15 để đi ăn."
                    }
                },
                {
                    "timeInfo": {
                        "startTime": "2026-05-30T11:45:00",
                        "endTime": "2026-05-30T13:00:00"
                    },
                    "title": "Về phòng: Tắm mát & Ngủ sâu",
                    "summary": "Tắm tráng nước mát xả sạch mồ hôi leo núi, kéo rèm, bật điều hòa và chìm vào giấc ngủ trọn vẹn 1 tiếng.",
                    "iconType": "hotel",
                    "details": {
                        "directions": {
                            "steps": [
                                "11:45 có mặt tại phòng. Dành 15 phút lập tức tắm tráng nước mát để rửa sạch bụi bẩn và mồ hôi.",
                                "12:00 kéo rèm che tối phòng, bật điều hòa mát lạnh.",
                                "Ngủ sâu giấc 1 tiếng đồng hồ (12:00 - 13:00)."
                            ]
                        },
                        "reason": "Khung thời gian 1h15p này (gồm 15p tắm + 1h ngủ trọn vẹn) là giấc ngủ điện ảnh lý tưởng giúp phục hồi sâu các nhóm cơ, chuẩn bị thể lực tốt nhất trước khi lên đồ quẩy nhạc."
                    }
                },
                {
                    "timeInfo": {
                        "startTime": "2026-05-30T13:00:00",
                        "endTime": "2026-05-30T14:00:00"
                    },
                    "title": "Chuẩn bị tổng lực trước giờ G (Makeup & Lên đồ)",
                    "summary": "Quỹ thời gian 1 tiếng vàng ngọc cho bạn gái lên đồ, trang phục và làm tóc chỉn chu.",
                    "iconType": "explore",
                    "details": {
                        "directions": {
                            "steps": [
                                "Dành trọn vẹn 1 tiếng cho bạn gái F5, làm tóc, trang điểm kỹ càng.",
                                "Xịt nước hoa, diện đồ đẹp chuẩn style festival.",
                                "Chuẩn bị sẵn túi hậu cần (lương khô, xúc xích, nước điện giải) mang theo."
                            ]
                        },
                        "reason": "Qũy thời gian trang điểm 1 tiếng cố định giúp giữ tâm lý thong thả, thoải mái và mang lại thần thái rạng ngời nhất khi lên hình. Việc mang theo Lương khô và Nước điện giải là vũ khí bí mật giúp sống sót trong đám đông."
                    }
                },
                {
                    "timeInfo": {
                        "startTime": "2026-05-30T14:00:00",
                        "endTime": "2026-05-30T14:20:00"
                    },
                    "title": "Khoảng đệm (Buffer) tại phòng & Kích hoạt Kịch bản Ăn chiều",
                    "summary": "Thời gian dự phòng tối quan trọng phòng ngừa rủi ro phát sinh và chốt đơn nhà hàng.",
                    "iconType": "time",
                    "details": {
                        "directions": {
                            "steps": [
                                "<b>Bảo hiểm thời gian:</b> Nếu khâu makeup lố giờ, 20 phút này sẽ tự động bù đắp.",
                                "<b>BƯỚC 1 (Gọi điện chốt mâm):</b> Ngồi phòng máy lạnh gọi ngay cho <b>Cơm Niêu Việt Xưa Bái Đính</b>. Hỏi rõ: <i>'Khoảng 14h45 em qua, quán có nhận khách lẻ không?'</i>. Nếu có, chốt luôn mâm: Cơm, thịt lợn kho/luộc, trứng rán, rau.",
                                "<b>BƯỚC 2 (Kích hoạt dự phòng):</b> Nếu Cơm Niêu báo nghỉ chiều, gọi ngay cho <b>Nhà Hàng Thăng Long</b> chốt y hệt. Nếu cả hai đều đóng cửa, báo nhà bếp <b>Quán sát Homestay</b> làm cơm rồi mới xuất phát đi show."
                            ]
                        },
                        "reason": "Tuyệt đối không để sát giờ đi ăn mới gọi. Đặt bước gọi điện ở mốc này (khi đang ngồi điều hòa mát mẻ ở phòng) giúp hai bạn chủ động 100%. Lỡ nhà hàng báo nghỉ, hai bạn vẫn cực kỳ vững tâm gọi quán khác mà không bị hụt hẫng hay cáu gắt lúc đang đứng giữa sân nắng."
                    }
                },
                {
                    "timeInfo": {
                        "startTime": "2026-05-30T14:20:00",
                        "endTime": "2026-05-30T14:45:00"
                    },
                    "title": "Lái xe Chặng 1 (Homestay ➔ Quán ăn chiều)",
                    "summary": "Di chuyển từ Homestay ra nhà hàng để ăn bữa chiều.",
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
                        "startTime": "2026-05-30T14:45:00",
                        "endTime": "2026-05-30T15:30:00"
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
                                "<b>Thưởng thức bữa ăn tại nhà hàng:</b> Sau khi đã hoàn tất việc gọi điện chốt món từ lúc 14:00, khi đến nơi đồ ăn đã được chuẩn bị sẵn sàng.",
                                "Hai bạn chỉ việc tận hưởng không gian mát mẻ và dùng bữa trong 45 phút. Việc này giúp tiết kiệm thời gian chờ đợi và đảm bảo bụng dạ êm ái trước khi vào show."
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
                        ]
                    }
                },
                {
                    "timeInfo": {
                        "startTime": "2026-05-30T15:30:00",
                        "endTime": "2026-05-30T15:45:00"
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
                                "Lái xe máy nhích qua đoạn đường bắt đầu nhen nhóm đông người.",
                                "Chủ động tìm các bãi gửi xe an toàn, có vé đàng hoàng. Khoảng cách không quá 300m."
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
                        "reason": "Cắt lát lộ trình: Do điểm dừng ăn cơm chỉ cách show 2km, hai bạn nhích xe cực kỳ ngắn khi bụng đã no, triệt tiêu việc xóc bụng mệt mỏi. 15 phút cho quãng đường 2km này là 'buffer' (khoảng đệm an toàn) để không bị cuống, phòng trường hợp tắc đường do dòng người đổ về nhạc hội."
                    }
                },
                {
                    "timeInfo": {
                        "startTime": "2026-05-30T15:45:00",
                        "endTime": "2026-05-30T16:50:00"
                    },
                    "title": "Check-in soát vé & Sống ảo Hoàng hôn",
                    "summary": "Qua cổng an ninh nhàn nhã. Tận dụng 1 tiếng 5 phút vàng ngọc săn ảnh hoàng hôn lãng mạn.",
                    "iconType": "explore",
                    "details": {
                        "directions": {
                            "steps": [
                                "Soát vé qua cổng an ninh bắt đầu lúc 15:45 (đường chưa bị quá tải như khung 16h30).",
                                "Tận dụng ánh nắng xiên lúc 16h để chụp ảnh check-in sống ảo trước khi trời tối và lớp makeup bị chảy mồ hôi."
                            ]
                        },
                        "reason": "MỐC THỜI GIAN LÝ TƯỞNG: Vào cổng với cái bụng no nê ấm áp, tâm trạng Chi sẽ cực kỳ vui vẻ, thần thái ngút ngàn để cho ra đời những bức ảnh để đời. Ánh sáng lúc 15h45 - 16h45 là Golden Hour hoàn hảo nhất."
                    }
                },
                {
                    "timeInfo": {
                        "startTime": "2026-05-30T16:50:00",
                        "endTime": "2026-05-30T17:00:00"
                    },
                    "title": "Di chuyển vào vị trí ghế ngồi Khán đài",
                    "summary": "Tản bộ vào khán đài, tìm đúng số ghế VIP, sẵn sàng nghe nhạc.",
                    "iconType": "time",
                    "details": {
                        "directions": {
                            "steps": [
                                "Di chuyển vào khu vực Rừng A1.",
                                "Tìm đúng Hàng N, số Ghế 29 & 30.",
                                "Ổn định chỗ ngồi, sẵn sàng cháy hết mình cùng âm nhạc."
                            ]
                        },
                        "reason": "Kỷ luật thép: Yên vị chính xác lúc 17:00 để không bỏ lỡ bất kỳ giây phút khai mạc show hay phần trình diễn của nghệ sĩ đầu tiên."
                    }
                },
                {
                    "timeInfo": {
                        "startTime": "2026-05-30T17:00:00",
                        "endTime": "2026-05-30T21:30:00"
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
                                "Tận hưởng các màn trình diễn của nghệ sĩ. (17:00 – 21:00. Có thể cháy timeline 30 phút)",
                                "CHIẾN THUẬT NẠP NĂNG LƯỢNG: ĐÓI thì lấy Lương Khô (xúc xích, bánh) trong túi ra cắn. KHÁT thì chỉ nhấp môi Nước điện giải để đỡ khát."
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
                        "reason": "Đặc quyền hạng vé: 'Có ghế ngồi' là chìa khóa vàng! Bạn có thể thong thả xem, mỏi thì ngồi xuống nghỉ, lúc nghệ sĩ sung thì đứng lên quẩy.\nCảnh báo sinh lý: Tuyệt đối KHÔNG xếp hàng mua đồ ăn vỉa hè (tốn thời gian/chặt chém) và KHÔNG uống quá nhiều nước để tránh việc bàng quang đầy phải đi tìm nhà vệ sinh (vô cùng ám ảnh ở các lễ hội đông người)."
                    }
                },
                {
                    "timeInfo": {
                        "startTime": "2026-05-30T21:30:00",
                        "endTime": "2026-05-30T22:00:00"
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
                        "startTime": "2026-05-30T22:00:00",
                        "endTime": "2026-05-30T23:00:00"
                    },
                    "title": "Vượt đường đêm về",
                    "summary": "Đường vắng và tối. ĐI CHẬM VÀ BÁM ĐUÔI CÁC XE Ô TÔ ĐỂ KÉ ĐÈN PHA. Về Homestay an toàn.",
                    "iconType": "time",
                    "details": {
                        "directions": {
                            "steps": [
                                "Kiểm tra kỹ mũ bảo hiểm, bật đèn pha.",
                                "Lái xe tốc độ chậm, duy trì khoảng cách an toàn."
                            ]
                        },
                        "reason": "Lưu ý an toàn: Đường từ Bái Đính/Quảng trường về Tràng An buổi đêm khá vắng, một số đoạn không có đèn đường (kinh nghiệm từ chuyến trước). Việc bám theo đuôi một chiếc ô tô để ké ánh sáng đèn pha của họ là cách đi an toàn và đỡ sợ nhất."
                    }
                },
                {
                    "timeInfo": {
                        "startTime": "2026-05-30T23:00:00",
                        "endTime": "2026-05-31T08:00:00"
                    },
                    "title": "Phục hồi & Đi Ngủ",
                    "summary": "Timeline chi tiết phục hồi sau đêm nhạc.",
                    "iconType": "hotel",
                    "details": {
                        "directions": {
                            "steps": [
                                "23:00 (30 phút): TẮM NƯỚC ẤM NÓNG ngay lập tức (Bắt buộc để xả mồ hôi và giúp giãn cơ bắp) & Tẩy trang.",
                                "23:30 (15 phút): Úp bát mì ly đã mua ở WinMart hôm qua, ăn thêm xúc xích bù năng lượng đã mất.",
                                "23:45 (15 phút): Lên giường, ôm nhau xem lại ảnh/video quay được tại show.",
                                "00:00: Tắt đèn đi ngủ."
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
                    "summary": "Đêm qua ngủ lúc 0h nên báo thức 08:00 là đảm bảo ngủ cực sâu. Thức dậy, hít thở không khí trong lành, ăn sáng tại homestay.",
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
                        "endTime": "2026-05-31T14:00:00"
                    },
                    "title": "Bữa trưa Máy lạnh Thư giãn",
                    "summary": "Kéo vali vào nhà hàng máy lạnh lớn. Thong thả dùng bữa 1.5 tiếng.",
                    "iconType": "food",
                    "details": {
                        "places": [
                            {
                                "name": "Cơm Gà Phố Cổ (Ưu tiên 1)",
                                "description": "215 Lê Thái Tổ - Đã xác thực có máy lạnh, không gian kín, đồ ăn khô ráo sạch sẽ, an toàn bụng tuyệt đối.",
                                "mapUrl": ""
                            },
                            {
                                "name": "Cơm Niêu Việt Xưa (Ưu tiên 2)",
                                "description": "80 Tràng An - Đã xác thực có phòng lạnh riêng, không ồn ào.",
                                "mapUrl": ""
                            },
                            {
                                "name": "Rơm Vàng (Ưu tiên 3)",
                                "description": "112 Lương Văn Tụy - Không gian rộng, máy lạnh buốt giá, đủ chỗ để vali lớn.",
                                "mapUrl": ""
                            }
                        ],
                        "budgets": [
                            {
                                "name": "Bữa trưa ngày cuối",
                                "amount": 300000,
                                "category": "food",
                                "note": "Ăn trưa và nghỉ ngơi tại nhà hàng trước khi lên xe quay về Hà Nội",
                                "isOptional": false
                            }
                        ],
                        "reason": "Phản biện chiến thuật: Đã HỦY kế hoạch ăn bún chả Tuấn Anh vào ngày về này vì quán đó không có máy lạnh và dễ bị ám mùi khói lên quần áo. Việc hai bạn ngồi thong thả dùng bữa 1.5 tiếng ở các nhà hàng máy lạnh lớn là hoàn toàn lịch sự, không ai đuổi, giữ cho cơ thể mát mẻ và thơm tho tuyệt đối trước khi bước lên xe Limousine chật hẹp."
                    }
                },
                {
                    "timeInfo": {
                        "startTime": "2026-05-31T14:00:00",
                        "endTime": "2026-05-31T16:15:00"
                    },
                    "title": "Limousine đón về Hà Nội",
                    "summary": "Lên xe lúc 14h, ngả ghế massage ngủ một giấc thư giãn. 16:15 có mặt ở nhà (Hà Nội).",
                    "iconType": "time",
                    "details": {
                        "directions": {
                            "steps": [
                                "Nhờ xe Limousine đến đón ngay tại cửa nhà hàng.",
                                "Ngả ghế ngủ một mạch về thủ đô."
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
                }
            ]
        }
    ]
};