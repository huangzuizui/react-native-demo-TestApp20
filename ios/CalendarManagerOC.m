//
//  CalendarManager.m
//  TestApp20
//
//  Created by SuJiexu on 16/4/26.
//  Copyright © 2016年 Facebook. All rights reserved.
//

// CalendarManager.m
#import "CalendarManagerOC.h"

@implementation CalendarManagerOC

RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(addEvent:(NSString *)name location:(NSString *)location)
{
  RCTLogInfo(@"Pretending011 to create an event %@ at %@", name, location);
}

RCT_EXPORT_METHOD(findEvents:(RCTResponseSenderBlock)callback)
{
  NSString *str = @"hello world!!";
  callback(@[[NSNull null], str]);
}

RCT_REMAP_METHOD(newFindEvents,
                 resolver:(RCTPromiseResolveBlock)resolve
                 rejecter:(RCTPromiseRejectBlock)reject)
{
  NSString *str = @"hello world!!";

  
//  
//  NSString *path = command.arguments[0];
//  NSString *uti = command.arguments[1];
//  if (!uti || (NSNull*)uti == [NSNull null]) {
//    NSArray *dotParts = [path componentsSeparatedByString:@"."];
//    NSString *fileExt = [dotParts lastObject];
//    
//    uti = (__bridge NSString *)UTTypeCreatePreferredIdentifierForTag(kUTTagClassFilenameExtension, (__bridge CFStringRef)fileExt, NULL);
//  }
//  
//  CDVViewController* cont = (CDVViewController*)[ super viewController ];
//  
//  dispatch_async(dispatch_get_main_queue(), ^{
//    // TODO: test if this is a URI or a path
//    NSURL *fileURL = [NSURL URLWithString:path];
//    
//    localFile = fileURL.path;
//    
//    NSLog(@"looking for file at %@", fileURL);
//    NSFileManager *fm = [NSFileManager defaultManager];
//    if(![fm fileExistsAtPath:localFile]) {
//      NSDictionary *jsonObj = @{@"status" : @"9",
//                                @"message" : @"File does not exist"};
//      CDVPluginResult *pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_ERROR
//                                                    messageAsDictionary:jsonObj];
//      [self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];
//      return;
//    }
//    
//    self.controller = [UIDocumentInteractionController  interactionControllerWithURL:fileURL];
//    self.controller.delegate = self;
//    self.controller.UTI = uti;
//    
//    CGRect rect = CGRectMake(0, 0, 1000.0f, 150.0f);
//    CDVPluginResult* pluginResult = nil;
//    BOOL wasOpened = [self.controller presentOptionsMenuFromRect:rect inView:cont.view animated:NO];
//    
//    if(wasOpened) {
//      pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsString: @""];
//    } else {
//      NSDictionary *jsonObj = @{@"status" : @"9",
//                                @"message" : @"Could not handle UTI"};
//      pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_ERROR
//                                   messageAsDictionary:jsonObj];
//    }
//    [self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];
//  });
  
  
  
  
  
  if (str) {
    resolve(str);
  } else {
    NSError *error = nil;
    reject(@"no_events", @"There were no events", error);
  }
}

@end