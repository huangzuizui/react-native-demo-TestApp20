//
//  CalendarManagerBridgeSwift.m
//  TestApp20
//
//  Created by SuJiexu on 16/4/26.
//  Copyright © 2016年 Facebook. All rights reserved.
//

#import <Foundation/Foundation.h>
#import "RCTBridgeModule.h"

@interface RCT_EXTERN_MODULE(CalendarManagerSwift, NSObject)

RCT_EXTERN_METHOD(addEvent:(NSString *)name location:(NSString *)location date:(nonnull NSNumber *)date)

RCT_EXTERN_METHOD(findEvent:(RCTResponseSenderBlock)callback (NSString *)str)

@end