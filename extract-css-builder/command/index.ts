import { BuilderOutput, createBuilder, BuilderContext } from '@angular-devkit/architect';
import { JsonObject } from '@angular-devkit/core';
import { runWebpack,  } from '@angular-devkit/build-webpack';

interface Options extends JsonObject {
  command: string;
  args: string[];
}

export default createBuilder<Options>(
  async (builderConfig: Options, context: BuilderContext): Promise<BuilderOutput> => {
    context.logger.info('build is starting');
    context.logger.info(builderConfig.command);
    const build = await context.scheduleTarget({
      target: 'build',
      project: context.target?.project || '',
      configuration: 'production'
    });

    const result = await build.result;
    context.logger.info(JSON.stringify(build.result));

    // build.output.subscribe(output => {
    //   context.logger.info(JSON.stringify(output));
    // });

    
    if (result.success) {
      // get the styles file generated from above build
      context.logger.info('getting the styles css file1');
      // context.logger.info(JSON.stringify(result.target));
      // context.logger.info(JSON.stringify(result.info));
      context.logger.info(JSON.stringify(result.baseOutputPath));
      context.logger.info(JSON.stringify(result));

      // runWebpack({ builderConfig})

      return {
        success: true
      }
    }

    return {
      success: false
    }
  });
