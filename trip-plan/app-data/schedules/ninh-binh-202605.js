// ========================================================================
// === DỮ LIỆU LỊCH TRÌNH CHUYẾN ĐI MỚI (FORESTIVAL 2026) ===
// File: ninh-binh-202605.js
// ========================================================================

const scheduleData = {
    "tripInfo": {
        "title": "Hành Trình Forestival 2026",
        "subtitle": "Hiếu & Chi | Kỳ nghỉ dưỡng & Nhạc hội",
        "dates": "29-31/05/2026",
        "defaultRegion": "Ninh Bình",
        "totalBudget": undefined,
        "documentUrl": ""
    },
    "security": {
        "secretCode": "",
        "hint": ""
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
                        "startTime": "2026-05-29T09:00:00",
                        "endTime": "2026-05-29T11:00:00"
                    },
                    "title": "Khởi hành Limousine (Có Buffer)",
                    "summary": "Đẩy giờ đi sớm lên 09:00. Ký gửi Vali, ngả ghế ngủ êm ái.",
                    "iconType": "time",
                    "details": {
                        "directions": {
                            "steps": [
                                "Thời gian 2 tiếng đã bao gồm thời gian đón trả khách.",
                                "Hành lý mang gọn nhẹ để tiện di chuyển buổi trưa (Không xách nước mỏi tay từ HN)."
                            ]
                        },
                        "budgets": [
                            {
                                "name": "Vé xe Limousine chiều đi",
                                "amount": 0,
                                "category": "transport",
                                "note": "Cần cập nhật giá vé",
                                "isOptional": false
                            }
                        ]
                    }
                },
                {
                    "timeInfo": {
                        "startTime": "2026-05-29T11:00:00",
                        "endTime": "2026-05-29T11:40:00"
                    },
                    "title": "Ăn trưa: Đặc sản Bún Chả Quạt",
                    "summary": "Nhờ Limousine trả thẳng cửa quán để tiết kiệm thời gian di chuyển.",
                    "iconType": "food",
                    "details": {
                        "places": [
                            {
                                "name": "Bún chả quạt Tuấn Anh (Ưu tiên 1)",
                                "description": "168a Đ. Nam Thành",
                                "mapUrl": ""
                            },
                            {
                                "name": "Bún Chả Ngõ 5 cs3 (Ưu tiên 2)",
                                "description": "202 Lê Thái Tổ",
                                "mapUrl": ""
                            },
                            {
                                "name": "Bún Chả Quạt Cố Đô (Ưu tiên 3)",
                                "description": "Lựa chọn dự phòng",
                                "mapUrl": ""
                            }
                        ],
                        "budgets": [
                            {
                                "name": "Ăn trưa Bún Chả",
                                "amount": 0,
                                "category": "food",
                                "note": "Dự kiến tại quán",
                                "isOptional": false
                            }
                        ],
                        "reason": "Quán bình dân, không máy lạnh xịn. Khung giờ 11h quán vắng khách nên vali để góc cực kỳ thoải mái. Ăn nhanh gọn để nhường chỗ và tránh nóng."
                    }
                },
                {
                    "timeInfo": {
                        "startTime": "2026-05-29T11:40:00",
                        "endTime": "2026-05-29T12:30:00"
                    },
                    "title": "Trú nóng & Mua sắm hậu cần",
                    "summary": "Bắt Taxi quãng đường ngắn sang Siêu thị WinMart. VÀO QUẦY GỬI VALI MIỄN PHÍ. Đi tay không hưởng điều hòa 45 phút.",
                    "iconType": "explore",
                    "details": {
                        "places": [
                            {
                                "name": "Siêu thị WinMart",
                                "description": "Số 848 Trần Hưng Đạo. Đại siêu thị lớn.",
                                "mapUrl": ""
                            }
                        ],
                        "directions": {
                            "steps": [
                                "Bắt Taxi quãng đường ngắn sang Siêu thị WinMart.",
                                "Thong thả mua 2 chai nước 1.5L và mì ly dự trữ cho đêm nhạc hội."
                            ]
                        },
                        "budgets": [
                            {
                                "name": "Đồ siêu thị (Nước, Mì ly)",
                                "amount": 0,
                                "category": "shopping",
                                "note": "Cần cập nhật hóa đơn",
                                "isOptional": false
                            },
                            {
                                "name": "Taxi từ quán ăn ra Siêu thị",
                                "amount": 0,
                                "category": "transport",
                                "note": "Quãng đường ngắn",
                                "isOptional": false
                            }
                        ],
                        "reason": "Chiến thuật hoàn hảo để tránh nóng buổi trưa khi chưa đến giờ check-in homestay."
                    }
                },
                {
                    "timeInfo": {
                        "startTime": "2026-05-29T12:30:00",
                        "endTime": "2026-05-29T12:50:00"
                    },
                    "title": "Taxi 1 mạch về Tràng An",
                    "summary": "Lấy lại Vali, xách túi đồ siêu thị. Gọi Taxi từ cửa WinMart chở thẳng về Homestay.",
                    "iconType": "logistics",
                    "details": {
                        "budgets": [
                            {
                                "name": "Taxi từ Siêu thị về Homestay",
                                "amount": 0,
                                "category": "transport",
                                "note": "Cần cập nhật giá cước",
                                "isOptional": false
                            }
                        ],
                        "reason": "Cước phí taxi minh bạch, an toàn tuyệt đối."
                    }
                },
                {
                    "timeInfo": {
                        "startTime": "2026-05-29T12:50:00",
                        "endTime": "2026-05-29T14:30:00"
                    },
                    "title": "Check-in, Tắm tráng & Ngủ trưa",
                    "summary": "Nhận phòng, cất đồ và nhận xe tay ga. TẮM TRÁNG LUÔN bằng nước mát xả sạch mồ hôi. Ngủ sâu giấc.",
                    "iconType": "hotel",
                    "details": {
                        "places": [
                            {
                                "name": "Trang An Peaceful Homestay",
                                "description": "Homestay phong cách resort cực chill.",
                                "mapUrl": ""
                            }
                        ],
                        "directions": {
                            "steps": [
                                "Nhận phòng, cất đồ và nhận xe tay ga.",
                                "Ngủ sâu giấc khoảng 1.5 tiếng để phục hồi năng lượng."
                            ]
                        },
                        "budgets": [
                            {
                                "name": "Chi phí thuê Homestay (2 đêm)",
                                "amount": 0,
                                "category": "hotel",
                                "note": "Cần cập nhật giá",
                                "isOptional": false
                            },
                            {
                                "name": "Thuê xe máy",
                                "amount": 0,
                                "category": "transport",
                                "note": "Tính theo số ngày sử dụng",
                                "isOptional": false
                            }
                        ]
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
                        "directions": {
                            "steps": [
                                "🌊 KẾ HOẠCH A: Bơi lội riêng tư (Đề xuất). 14h30: Hồ bơi homestay đang vắng khách cuối tuần, xuống bơi bao trọn hồ. 15h30: Lên phòng tắm tráng lại. 16h15: Dành 45p Makeup Lên đồ chuẩn bị ra phố.",
                                "☕ KẾ HOẠCH B: Đi Cafe 'Giờ Vàng'. 14h30: Dành ngay 45p Makeup lộng lẫy. 15h15: Lấy xe chạy ra quán Cafe quanh Tràng An (như Tràng An 1990) săn ảnh Hoàng hôn (chi phí ~100k-150k).",
                                "🏡 KẾ HOẠCH C: Chill tại Homestay. 14h30: Dành 45p Makeup. 15h15: Đi dạo, tự pha trà/cafe chụp ảnh nhàn hạ ngay tại khuôn viên vườn của homestay không tốn thêm tiền."
                            ]
                        },
                        "budgets": [
                            {
                                "name": "Đi Cafe chiều Thứ 6",
                                "amount": 0,
                                "category": "drink",
                                "note": "Chỉ phát sinh nếu chọn Kế hoạch B",
                                "isOptional": true
                            }
                        ]
                    }
                },
                {
                    "timeInfo": {
                        "startTime": "2026-05-29T17:00:00",
                        "endTime": "2026-05-29T17:20:00"
                    },
                    "title": "Di chuyển lên Trung tâm TP",
                    "summary": "Dù chọn phương án nào, đến 17h00 hai bạn dắt xe chạy hóng gió vào khu vực phường Tân Thành (Trung tâm TP) để ăn tối.",
                    "iconType": "time",
                    "details": {}
                },
                {
                    "timeInfo": {
                        "startTime": "2026-05-29T17:20:00",
                        "endTime": "2026-05-29T18:15:00"
                    },
                    "title": "Ăn tối (Dễ tiêu hóa)",
                    "summary": "Đẩy giờ ăn sớm để khớp lịch ngắm hoàng hôn, bụng nhẹ dễ tiêu.",
                    "iconType": "food",
                    "details": {
                        "places": [
                            {
                                "name": "Cơm Niêu Việt Xưa (Ưu tiên 1)",
                                "description": "80 Tràng An - Phòng lạnh, cơm ngon êm bụng.",
                                "mapUrl": ""
                            },
                            {
                                "name": "Rơm Vàng (Ưu tiên 2)",
                                "description": "112 Lương Văn Tụy.",
                                "mapUrl": ""
                            },
                            {
                                "name": "Heo Say Xỉn (Ưu tiên 3)",
                                "description": "2 Tràng An.",
                                "mapUrl": ""
                            }
                        ],
                        "budgets": [
                            {
                                "name": "Bữa tối ngày 1",
                                "amount": 0,
                                "category": "food",
                                "note": "Cần cập nhật hóa đơn",
                                "isOptional": false
                            }
                        ]
                    }
                },
                {
                    "timeInfo": {
                        "startTime": "2026-05-29T18:15:00",
                        "endTime": "2026-05-29T19:00:00"
                    },
                    "title": "GỘI ĐẦU Thư giãn",
                    "summary": "Ghé Nghĩa Hair Salon hoặc tiệm lân cận. Ưu tiên 100% cho bạn gái gội + sấy tạo kiểu bồng bềnh.",
                    "iconType": "relax",
                    "details": {
                        "places": [
                            {
                                "name": "Nghĩa Hair Salon",
                                "description": "12 Lương Văn Tụy (Hoặc tiệm lân cận).",
                                "mapUrl": ""
                            }
                        ],
                        "directions": {
                            "steps": [
                                "⚠️ LƯU Ý QUAN TRỌNG: Dặn thợ KHÔNG ấn huyệt vùng bụng vì vừa ăn tối xong."
                            ]
                        },
                        "budgets": [
                            {
                                "name": "Gội đầu thư giãn",
                                "amount": 0,
                                "category": "relax",
                                "note": "Dành cho bạn gái",
                                "isOptional": false
                            }
                        ]
                    }
                },
                {
                    "timeInfo": {
                        "startTime": "2026-05-29T19:15:00",
                        "endTime": "2026-05-29T21:30:00"
                    },
                    "title": "Dạo Phố đêm Hoa Lư",
                    "summary": "Tóc thơm, bụng nhẹ. Thong thả dạo Phố cổ Hoa Lư, ngắm Tháp Tứ Ân.",
                    "iconType": "nightlife",
                    "details": {
                        "places": [
                            {
                                "name": "Phố cổ Hoa Lư",
                                "description": "Ngắm Tháp Tứ Ân, mua quà vặt đường phố.",
                                "mapUrl": ""
                            },
                            {
                                "name": "Hồ Kỳ Lân",
                                "description": "Đi dạo ven hồ, đi thuyền (nếu có).",
                                "mapUrl": ""
                            }
                        ],
                        "directions": {
                            "steps": [
                                "Tuyệt đối không vào quán Cafe nữa (để tránh lặp trải nghiệm Highlands chuyến trước).",
                                "Tận hưởng mua quà vặt đường phố, đi thuyền hoặc dạo ven hồ Kỳ Lân."
                            ]
                        },
                        "budgets": [
                            {
                                "name": "Ăn vặt / Vé đi thuyền",
                                "amount": 0,
                                "category": "other",
                                "note": "Chi phí dạo phố",
                                "isOptional": true
                            }
                        ]
                    }
                },
                {
                    "timeInfo": {
                        "startTime": "2026-05-29T22:00:00",
                        "endTime": "2026-05-29T22:30:00"
                    },
                    "title": "Về Homestay & Tắm lần 2",
                    "summary": "Chạy xe về lại Tràng An. Tắm lại bằng NƯỚC ẤM để xả gió lạnh. Lên giường ngủ sớm.",
                    "iconType": "hotel",
                    "details": {}
                }
            ]
        },
        // ==================== NGÀY 2 ====================
        {
            "dayInfo": {
                "day": 2,
                "date": "2026-05-30",
                "title": "Ngày 2: Chinh phục Tuyệt Tịnh Cốc & Forestival",
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
                    "summary": "Thức dậy với 100% thể lực. Ăn sáng miễn phí tại homestay để nạp năng lượng cho buổi sáng.",
                    "iconType": "food",
                    "details": {}
                },
                {
                    "timeInfo": {
                        "startTime": "2026-05-30T08:30:00",
                        "endTime": "2026-05-30T10:45:00"
                    },
                    "title": "TUYỆT TỊNH CỐC (Lợi thế Vé Ghế Ngồi)",
                    "summary": "Chạy xe 1.5km. Thuê xe đạp đôi dạo hồ, và NÊN LEO 200 bậc đá lên Động Am Tiên ngắm toàn cảnh.",
                    "iconType": "explore",
                    "details": {
                        "places": [
                            {
                                "name": "Tuyệt Tịnh Cốc",
                                "description": "Hồ nước xanh ngọc bích, leo Động Am Tiên ngắm toàn cảnh.",
                                "mapUrl": ""
                            }
                        ],
                        "budgets": [
                            {
                                "name": "Vé tham quan Tuyệt Tịnh Cốc",
                                "amount": 0,
                                "category": "ticket",
                                "note": "Cập nhật giá vé x 2 người",
                                "isOptional": false
                            },
                            {
                                "name": "Thuê xe đạp đôi",
                                "amount": 0,
                                "category": "other",
                                "note": "Dạo quanh hồ",
                                "isOptional": false
                            }
                        ],
                        "reason": "Vì có 'Vé Ghế Ngồi' tối nay, thể lực của bạn được bảo đảm, hoàn toàn dư sức leo bậc đá (bù đắp tiếc nuối chuyến trước). Nắng sáng rất rực rỡ và không bị sụp bóng núi."
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
                                "description": "Riêng tư, gọi mâm cơm trắng bò xào chín kỹ.",
                                "mapUrl": ""
                            },
                            {
                                "name": "Forest Sunset Bình Thái (Ưu tiên 2)",
                                "description": "Sát homestay.",
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
                                "Tới quán, vào nhà vệ sinh rửa mặt, rửa tay ráo mồ hôi rồi thong thả dùng bữa."
                            ]
                        },
                        "budgets": [
                            {
                                "name": "Bữa trưa tiện đường",
                                "amount": 0,
                                "category": "food",
                                "note": "Cần cập nhật hóa đơn",
                                "isOptional": false
                            }
                        ],
                        "reason": "Giải quyết dứt điểm các hoạt động bên ngoài để khi về phòng là nghỉ ngơi hoàn toàn."
                    }
                },
                {
                    "timeInfo": {
                        "startTime": "2026-05-30T11:45:00",
                        "endTime": "2026-05-30T13:45:00"
                    },
                    "title": "Về phòng: Tắm mát & Ngủ sâu",
                    "summary": "Về đến homestay là bạn ĐÃ XONG mọi việc bên ngoài.",
                    "iconType": "hotel",
                    "details": {
                        "directions": {
                            "steps": [
                                "Nhảy vào tắm tráng cho sạch mồ hôi leo núi.",
                                "Kéo rèm, bật điều hòa và chìm vào giấc ngủ trọn vẹn 2 tiếng."
                            ]
                        },
                        "reason": "Khối thời gian 'Đóng cửa nghỉ ngơi' vô giá. Cảm giác phần thưởng không gì sảng khoái hơn để reset thể lực trước thềm đêm nhạc."
                    }
                },
                {
                    "timeInfo": {
                        "startTime": "2026-05-30T13:45:00",
                        "endTime": "2026-05-30T15:00:00"
                    },
                    "title": "Chuẩn bị tổng lực trước giờ G",
                    "summary": "Block-time chuẩn bị lên đồ và hậu cần.",
                    "iconType": "time",
                    "details": {
                        "directions": {
                            "steps": [
                                "13:45: Tắm tráng F5 bằng nước mát.",
                                "14:00 (50p): Bạn gái Makeup kỹ, làm tóc, lên đồ.",
                                "14:50: Pre-load KHÔ (Ăn bánh mì/xôi để chắc bụng). Gói Lương khô + Nước điện giải."
                            ]
                        }
                    }
                },
                {
                    "timeInfo": {
                        "startTime": "2026-05-30T15:00:00",
                        "endTime": "2026-05-30T15:45:00"
                    },
                    "title": "Di chuyển & Tìm bãi gửi xe",
                    "summary": "Chạy xe 11.5km ra Quảng trường. Quỹ thời gian 45 phút rất dư dả để đối phó tắc đường và tìm chỗ gửi xe an toàn.",
                    "iconType": "time",
                    "details": {}
                },
                {
                    "timeInfo": {
                        "startTime": "2026-05-30T15:45:00",
                        "endTime": "2026-05-30T17:00:00"
                    },
                    "title": "Check-in & Sống ảo",
                    "summary": "Qua cửa an ninh nhàn nhã lúc chưa quá đông. Chụp ảnh hoàng hôn nắng đẹp với lớp makeup còn tươi tắn 100%.",
                    "iconType": "explore",
                    "details": {}
                },
                {
                    "timeInfo": {
                        "startTime": "2026-05-30T17:00:00",
                        "endTime": "2026-05-30T21:30:00"
                    },
                    "title": "Quẩy Forestival (Rừng A1 - Hàng N)",
                    "summary": "Vị trí: Rừng A1, Hàng N, Ghế 29 & 30.",
                    "iconType": "nightlife",
                    "details": {
                        "directions": {
                            "steps": [
                                "Chiến thuật nạp năng lượng: ĐÓI thì lấy Lương Khô ra cắn. KHÔNG xếp hàng đồ ăn vỉa hè.",
                                "KHÁT thì chỉ nhấp môi Nước điện giải để không làm đầy bàng quang."
                            ]
                        },
                        "budgets": [
                            {
                                "name": "Vé nhạc hội Forestival 2026",
                                "amount": 0,
                                "category": "ticket",
                                "note": "Khu vực Rừng A1, Ghế 29-30",
                                "isOptional": false
                            },
                            {
                                "name": "Phí gửi xe tại sự kiện",
                                "amount": 0,
                                "category": "transport",
                                "note": "Dự kiến phí giữ xe máy",
                                "isOptional": false
                            }
                        ],
                        "reason": "Lợi thế ghế ngồi: Thong thả xem, mỏi thì ngồi, lúc sung thì đứng. Bảo toàn được đôi chân."
                    }
                },
                {
                    "timeInfo": {
                        "startTime": "2026-05-30T21:30:00",
                        "endTime": "2026-05-30T22:00:00"
                    },
                    "title": "Dư âm & Chụp ảnh nốt",
                    "summary": "Tránh tắc nghẽn bãi gửi xe bằng cách nán lại 30 phút. Chụp ảnh với background sân khấu khi đám đông đã tản bớt.",
                    "iconType": "relax",
                    "details": {}
                },
                {
                    "timeInfo": {
                        "startTime": "2026-05-30T22:00:00",
                        "endTime": "2026-05-30T23:00:00"
                    },
                    "title": "Vượt đường đêm về",
                    "summary": "Đường vắng và tối. ĐI CHẬM VÀ BÁM ĐUÔI CÁC XE Ô TÔ ĐỂ KÉ ĐÈN PHA. Về Homestay an toàn.",
                    "iconType": "time",
                    "details": {}
                },
                {
                    "timeInfo": {
                        "startTime": "2026-05-30T23:00:00",
                        "endTime": "2026-05-31T00:00:00"
                    },
                    "title": "Phục hồi & Đi Ngủ",
                    "summary": "Timeline chi tiết phục hồi sau đêm nhạc.",
                    "iconType": "hotel",
                    "details": {
                        "directions": {
                            "steps": [
                                "23:00 (30p): TẮM NƯỚC ẤM NÓNG (bắt buộc để giãn cơ) & Tẩy trang.",
                                "23:30 (15p): Úp bát mì ly, ăn xúc xích bù năng lượng.",
                                "23:45 (15p): Xem ảnh/video quay được tại show.",
                                "00:00: Tắt đèn đi ngủ."
                            ]
                        }
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
                    "details": {}
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
                                "😴 KẾ HOẠCH A: Ngủ Bù & Đi Dạo (Ưu tiên). Nếu cơ thể quá mệt: Tắt báo thức ngủ nướng thêm. Dậy muộn thì chỉ đi dạo hít thở quanh khuôn viên homestay, không vận động mạnh.",
                                "🌊 KẾ HOẠCH B: Bơi Lội Trị Liệu. Nếu còn sức: Ngâm mình trong hồ bơi để 'vật lý trị liệu', giãn cơ đùi sau đêm nhạc. Phải kết thúc bơi lúc 10h15 để kịp vệ sinh.",
                                "☕ KẾ HOẠCH C: Cafe Gần Homestay. Nếu đã bơi chiều T6: Ra một quán cafe mộc mạc NGAY GẦN homestay. Ăn mặc thoải mái, uống nước tĩnh tâm thư giãn, tiện đường về dọn đồ."
                            ]
                        },
                        "budgets": [
                            {
                                "name": "Tiền Cafe sáng CN",
                                "amount": 0,
                                "category": "drink",
                                "note": "Chỉ tính nếu đi Cafe (Kế hoạch C)",
                                "isOptional": true
                            }
                        ]
                    }
                },
                {
                    "timeInfo": {
                        "startTime": "2026-05-31T10:30:00",
                        "endTime": "2026-05-31T11:00:00"
                    },
                    "title": "Vệ sinh & Đóng gói siêu tốc",
                    "summary": "30 phút vàng ngọc thao tác nhanh gọn.",
                    "iconType": "logistics",
                    "details": {
                        "directions": {
                            "steps": [
                                "Tắm tráng nhanh bằng nước mát để cơ thể thơm tho (phòng trường hợp ra mồ hôi khi bơi/đi dạo).",
                                "Bạn gái trang điểm nhanh gọn nhẹ nhàng tươm tất.",
                                "Hai bạn dùng chung 1 vali, gói gọn toàn bộ đồ đạc vào Vali Xiaomi 20 inch."
                            ]
                        }
                    }
                },
                {
                    "timeInfo": {
                        "startTime": "2026-05-31T11:00:00",
                        "endTime": "2026-05-31T11:00:00"
                    },
                    "title": "Đồng bộ: Trả Phòng & Trả Xe",
                    "summary": "Cắt đứt mọi vướng bận, vali gọn gàng, đầu óc thanh thản 100%.",
                    "iconType": "hotel",
                    "details": {
                        "reason": "✅ CHIẾN THUẬT: Đừng cố tận dụng 1 giờ chênh lệch (đến 12h) để đi chơi Tuyệt Tịnh Cốc lúc này vì sẽ bị bẩn người, đổ mồ hôi mà không có chỗ tắm lại. Hãy trả phòng và trả xe CÙNG LÚC đúng 11h00 để không bị tính thêm tiền phạt checkout muộn."
                    }
                },
                {
                    "timeInfo": {
                        "startTime": "2026-05-31T11:00:00",
                        "endTime": "2026-05-31T11:45:00"
                    },
                    "title": "Thư giãn tại sảnh & Chụp ảnh cuối",
                    "summary": "Gửi Vali tại lễ tân. Hai bạn đi dạo tay không trong khuôn viên homestay, ngồi ở sảnh chờ hoặc hồ bơi chụp những bức ảnh kỷ niệm cuối cùng dưới nắng nhẹ.",
                    "iconType": "camera",
                    "details": {}
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
                                "Tận hưởng ô tô máy lạnh tránh cái nắng gắt buổi trưa."
                            ]
                        },
                        "budgets": [
                            {
                                "name": "Taxi từ Homestay ra Trung tâm",
                                "amount": 0,
                                "category": "transport",
                                "note": "Khoảng 100k - 150k",
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
                    "title": "Bữa trưa Máy lạnh Thư giãn",
                    "summary": "Kéo vali vào nhà hàng máy lạnh lớn. Thong thả dùng bữa 1.5 tiếng.",
                    "iconType": "food",
                    "details": {
                        "places": [
                            {
                                "name": "Cơm Gà Phố Cổ (Ưu tiên 1)",
                                "description": "215 Lê Thái Tổ - Đã xác thực có máy lạnh, đồ khô ráo sạch sẽ, an toàn bụng tuyệt đối.",
                                "mapUrl": ""
                            },
                            {
                                "name": "Cơm Niêu Việt Xưa (Ưu tiên 2)",
                                "description": "80 Tràng An - Đã xác thực có phòng lạnh riêng, cực kỳ êm bụng.",
                                "mapUrl": ""
                            },
                            {
                                "name": "Rơm Vàng (Ưu tiên 3)",
                                "description": "112 Lương Văn Tụy - Không gian rộng, máy lạnh buốt giá.",
                                "mapUrl": ""
                            }
                        ],
                        "budgets": [
                            {
                                "name": "Bữa trưa ngày cuối",
                                "amount": 0,
                                "category": "food",
                                "note": "Nghỉ ngơi trước khi lên xe",
                                "isOptional": false
                            }
                        ],
                        "reason": "Đã HỦY kế hoạch ăn bún chả Tuấn Anh ngày này vì không có máy lạnh và ám mùi. Việc hai bạn ngồi thong thả dùng bữa 1.5 tiếng ở các nhà hàng máy lạnh lớn là hoàn toàn lịch sự và thoải mái trước khi lên xe."
                    }
                },
                {
                    "timeInfo": {
                        "startTime": "2026-05-31T14:00:00",
                        "endTime": "2026-05-31T16:15:00"
                    },
                    "title": "Limousine đón về Hà Nội",
                    "summary": "Lên xe lúc 14h, ngả ghế massage ngủ một giấc thư giãn. 16:15 có mặt ở nhà (Hà Nội).",
                    "iconType": "logistics",
                    "details": {
                        "budgets": [
                            {
                                "name": "Vé Limousine chiều về",
                                "amount": 0,
                                "category": "transport",
                                "note": "Cần cập nhật giá vé",
                                "isOptional": false
                            }
                        ],
                        "reason": "Kết thúc chuyến đi hoàn mỹ, 100% năng lượng sẵn sàng cho Thứ 2 đi làm!"
                    }
                }
            ]
        }
    ]
};