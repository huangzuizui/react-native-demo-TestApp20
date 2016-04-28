//
//  CalendarManagerSwift.swift
//  TestApp20
//
//  Created by SuJiexu on 16/4/26.
//  Copyright © 2016年 Facebook. All rights reserved.
//

import Foundation
@objc(CalendarManagerSwift)
class CalendarManagerSwift: NSObject {
  
  @objc func addEvent(name: String, location: String, date: NSNumber) -> Void {
    // Date is ready to use!
    print(name);
  }
  
  @objc func findEvent(callback: RCTResponseSenderBlock) -> Void {
    // Date is ready to use!
    
    let str:String = "hello world!!";
    let hello:String = "hello zuizui!!";
    callback([str, hello]);
  }
  
}